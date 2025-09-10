import { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { DUMMY_CONTRACTORS_NY } from "@/data/contractors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { MapPin, Phone, Globe, CheckCircle2, Star, SlidersHorizontal, Sparkles, Award, ShieldCheck, Search, Bookmark, MessageCircle } from "lucide-react";

const Contractors = () => {
  const [params, setParams] = useSearchParams();
  const zip = (params.get("zip") || "").trim();
  const serviceRaw = (params.get("service") || "").trim();
  const service = serviceRaw.toLowerCase();
  const needsParam = (params.get("needs") || "").trim();
  const view = (params.get("view") || "questions").trim();

  const ALL_OPTIONS = [
    "Bathroom Remodel",
    "Kitchen Remodel",
    "Flooring",
    "Plumbing",
    "Electrician",
    "HVAC Services",
    "Roofing & Gutters",
    "Masonry & Concrete",
    "Windows & Doors",
    "Painting",
    "Deck & Patio",
    "Landscaping",
    "Carpentry",
    "Building Remodeling",
  ];

  // Questionnaire state
  const TOTAL_STEPS = 6;
  const initialStep = Math.max(1, Math.min(TOTAL_STEPS, parseInt(params.get("step") || "1", 10) || 1));
  const [questionStep, setQuestionStep] = useState<number>(initialStep);
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [ownership, setOwnership] = useState<string>("");
  const [projectNotes, setProjectNotes] = useState<string>("");
  const [projectAddress, setProjectAddress] = useState<string>("");
  const [projectCity, setProjectCity] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);

  const BUDGET_OPTIONS = ["<$5k", "$5k-$15k", "$15k-$50k", "$50k-$100k", ">$100k"]; 
  const TIMELINE_OPTIONS = ["ASAP", "1-2 weeks", "1 month", "2-3 months", ">3 months"]; 
  const PROPERTY_TYPES = ["Single-family", "Multi-family", "Apartment/Condo", "Commercial", "Other"]; 
  const OWNERSHIP_TYPES = ["Owner", "Renter", "Property Manager", "Other"]; 
  const [sortBy, setSortBy] = useState<"best" | "rating" | "name">("best");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(t);
  }, []);

  const suggestedOptions = useMemo(() => {
    const s = serviceRaw.toLowerCase();
    if (!s) return ALL_OPTIONS.slice(0, 6);
    return ALL_OPTIONS.filter(o => o.toLowerCase().includes(s)).concat(
      ALL_OPTIONS.filter(o => !o.toLowerCase().includes(s)).slice(0, 5)
    );
  }, [serviceRaw]);

  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(() =>
    needsParam ? needsParam.split(",").map(s => s.trim()).filter(Boolean) : []
  );

  useEffect(() => {
    // keep state in sync with URL when user edits address/service
    if (!needsParam && selectedNeeds.length) {
      setSelectedNeeds([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zip, serviceRaw]);

  useEffect(() => {
    // keep step in sync with URL when toggling between views
    if (view === "questions") {
      const s = Math.max(1, Math.min(TOTAL_STEPS, parseInt(params.get("step") || "1", 10) || 1));
      if (s !== questionStep) setQuestionStep(s);
    }
  }, [view, params, questionStep]);

  const results = useMemo(() => {
    if (!zip) return [] as typeof DUMMY_CONTRACTORS_NY;
    let filtered = DUMMY_CONTRACTORS_NY.filter(c => c.address.zip === zip);
    if (service) {
      filtered = filtered.filter(c => c.services.some(sv => sv.toLowerCase().includes(service)));
    }
    if (selectedNeeds.length > 0) {
      filtered = filtered.filter(c => selectedNeeds.every(n => c.services.includes(n)));
    }
    const scoreFor = (c: (typeof DUMMY_CONTRACTORS_NY)[number]) => {
      let score = 0;
      if (service && c.services.some(sv => sv.toLowerCase().includes(service))) score += 2;
      score += selectedNeeds.reduce((acc, n) => acc + (c.services.includes(n) ? 1 : 0), 0);
      return score;
    };
    return filtered.slice().sort((a, b) => scoreFor(b) - scoreFor(a));
  }, [zip, service, selectedNeeds]);

  const sortedResults = useMemo(() => {
    const arr = results.slice();
    if (sortBy === "rating") return arr.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sortBy === "name") return arr.sort((a, b) => a.name.localeCompare(b.name));
    return arr;
  }, [results, sortBy]);

  const servicePrompt = useMemo(() => {
    const area = zip || "your area";
    if (!serviceRaw) {
      return `Select the services you need so we can match the right contractors in ${area}.`;
    }
    const s = serviceRaw.toLowerCase();
    // Remodel-specific phrasing
    if (s.includes("kitchen")) {
      return `Select the needs for your kitchen remodel so we can match the right contractors in ${area}.`;
    }
    if (s.includes("bath")) {
      return `Select the needs for your bathroom remodel so we can match the right contractors in ${area}.`;
    }
    // Service category phrasing
    let category = s;
    if (s.includes("air condition")) category = "air conditioning";
    else if (s.includes("hvac")) category = "HVAC";
    else if (s.includes("plumb")) category = "plumbing";
    else if (s.includes("electric")) category = "electrical";
    else if (s.includes("floor")) category = "flooring";
    else if (s.includes("roof")) category = "roofing";
    else if (s.includes("mason") || s.includes("concrete")) category = "masonry & concrete";
    else if (s.includes("window") || s.includes("door")) category = "windows & doors";
    else if (s.includes("landscap")) category = "landscaping";
    else if (s.includes("carpent")) category = "carpentry";
    else if (s.includes("paint")) category = "painting";
    else if (s.includes("deck") || s.includes("patio")) category = "deck & patio";
    else if (s.includes("remodel")) category = "building remodeling";
    return `Select the ${category} services you need so we can match the right contractors in ${area}.`;
  }, [serviceRaw, zip]);

  const isStep1NextDisabled = !zip || selectedNeeds.length === 0;
  const isBudgetNextDisabled = !budget;
  const isTimelineNextDisabled = !timeline;
  const isPropertyNextDisabled = !propertyType;
  const isOwnershipNextDisabled = !ownership;

  const getSamplePhotos = (seed: number) => {
    const ids = [1, 2, 3, 4, 5, 6, 7];
    const start = seed % ids.length;
    const picks = [ids[start], ids[(start + 1) % ids.length], ids[(start + 2) % ids.length]];
    return picks.map((n) => `/thumbnail-${n}.jpg`);
  };

  const renderStepIndicator = () => {
    const pct = Math.round((questionStep / TOTAL_STEPS) * 100);
    return (
      <div className="mb-6">
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-yellow-400 transition-all" style={{ width: `${pct}%` }} aria-hidden />
        </div>
        <div className="flex items-center gap-5 justify-center">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${questionStep === n ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700"}`}>{n}</div>
              <div className={`text-sm ${questionStep === n ? "text-gray-900 font-medium" : "text-gray-600"}`}>
                {n === 1 ? "Services" : n === 2 ? "Budget" : n === 3 ? "Timeline" : n === 4 ? "Property" : n === 5 ? "Ownership" : "Contact"}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {view === "results" && (
        <div className="mb-6 rounded-xl bg-gradient-to-r from-yellow-100 via-white to-yellow-50 border border-yellow-200 p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
                Best contractor matches {zip ? `in ${zip}` : "near you"}
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </h1>
              <p className="text-sm text-gray-700 mt-1">Based on your answers.</p>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Beta</Badge>
          </div>
        </div>
      )}

      {view === "questions" && (
        <Card className="border border-gray-200 mb-8 max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>
              {`Step ${questionStep} of ${TOTAL_STEPS}`} — Tell us what you need
            </CardTitle>
            <p className="mt-1 text-sm text-gray-600">
              {questionStep === 1 && servicePrompt}
              {questionStep === 2 && "What is your budget for this project?"}
              {questionStep === 3 && "How soon would you like the work to begin?"}
              {questionStep === 4 && "What type of property is this for?"}
              {questionStep === 5 && "Are you the owner, renter, or property manager?"}
              {questionStep === 6 && "How can contractors contact you?"}
            </p>
          </CardHeader>
          <CardContent>
            {renderStepIndicator()}
            {questionStep === 1 && (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {suggestedOptions.map((opt) => {
                    const checked = selectedNeeds.includes(opt);
                    const recommended = service && opt.toLowerCase().includes(service);
                    return (
                      <label
                        key={opt}
                        className={`flex items-center justify-between gap-3 border rounded-xl px-5 py-4 cursor-pointer transition shadow-sm ${
                          checked ? "border-yellow-400 bg-yellow-50 ring-1 ring-yellow-300" : "border-gray-200 hover:border-yellow-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={checked}
                            onChange={(e) => {
                              setSelectedNeeds((prev) => {
                                if (e.target.checked) return Array.from(new Set([...prev, opt]));
                                return prev.filter(x => x !== opt);
                              });
                            }}
                            aria-label={opt}
                          />
                          <div className="flex flex-col">
                            <span className="text-base text-gray-900">{opt}</span>
                            {recommended ? (
                              <span className="mt-0.5 inline-block w-fit px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-[10px] tracking-wide uppercase">Recommended</span>
                            ) : null}
                          </div>
                        </div>
                        {checked ? <CheckCircle2 className="w-6 h-6 text-yellow-500" /> : <div className="w-5 h-5 rounded-full border border-gray-300" />}
                      </label>
                    );
                  })}
                </div>
                <div className="mt-3 text-xs text-gray-600">Selected {selectedNeeds.length} of {suggestedOptions.length}</div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-gray-500">
                    Tip: you can select multiple services.
                    {isStep1NextDisabled ? (
                      <span className="ml-2 text-gray-400">Add at least 1 service to continue.</span>
                    ) : null}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => { setSelectedNeeds([]); setBudget(""); setTimeline(""); }}>Clear</Button>
                    <Button
                      className="bg-[#fce011] hover:bg-[#fce011]/90 text-black font-bold"
                      disabled={isStep1NextDisabled}
                      onClick={() => { const next = new URLSearchParams(params); next.set("view", "questions"); next.set("step", "2"); setParams(next, { replace: true }); setQuestionStep(2); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    >Next</Button>
                  </div>
                </div>
              </>
            )}

            {questionStep === 2 && (
              <>
                <div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {BUDGET_OPTIONS.map(b => (
                      <label key={b} className={`px-4 py-3 rounded-xl border ${budget === b ? "border-yellow-400 bg-yellow-50" : "border-gray-200"} cursor-pointer text-base hover:bg-yellow-50 transition focus-within:ring-2 focus-within:ring-yellow-300`}>
                        <input type="radio" name="budget" className="hidden" checked={budget === b} onChange={() => setBudget(b)} />
                        {b}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Button variant="secondary" onClick={() => { const next = new URLSearchParams(params); next.set("step", "1"); setParams(next, { replace: true }); setQuestionStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back</Button>
                  <Button className="bg-[#fce011] hover:bg-[#fce011]/90 text-black font-bold" disabled={isBudgetNextDisabled} onClick={() => { const next = new URLSearchParams(params); next.set("step", "3"); setParams(next, { replace: true }); setQuestionStep(3); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Next</Button>
                </div>
              </>
            )}

            {questionStep === 3 && (
              <>
                <div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {TIMELINE_OPTIONS.map(t => (
                      <label key={t} className={`px-4 py-3 rounded-xl border ${timeline === t ? "border-yellow-400 bg-yellow-50" : "border-gray-200"} cursor-pointer text-base hover:bg-yellow-50 transition focus-within:ring-2 focus-within:ring-yellow-300`}>
                        <input type="radio" name="timeline" className="hidden" checked={timeline === t} onChange={() => setTimeline(t)} />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Button variant="secondary" onClick={() => { const next = new URLSearchParams(params); next.set("step", "2"); setParams(next, { replace: true }); setQuestionStep(2); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back</Button>
                  <Button className="bg-[#fce011] hover:bg-[#fce011]/90 text-black font-bold" disabled={isTimelineNextDisabled} onClick={() => { const next = new URLSearchParams(params); next.set("step", "4"); setParams(next, { replace: true }); setQuestionStep(4); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Next</Button>
                </div>
              </>
            )}

            {questionStep === 4 && (
              <>
                <div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {PROPERTY_TYPES.map(p => (
                      <label key={p} className={`px-4 py-3 rounded-xl border ${propertyType === p ? "border-yellow-400 bg-yellow-50" : "border-gray-200"} cursor-pointer text-base hover:bg-yellow-50 transition focus-within:ring-2 focus-within:ring-yellow-300`}>
                        <input type="radio" name="propertyType" className="hidden" checked={propertyType === p} onChange={() => setPropertyType(p)} />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Button variant="secondary" onClick={() => { const next = new URLSearchParams(params); next.set("step", "3"); setParams(next, { replace: true }); setQuestionStep(3); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back</Button>
                  <Button className="bg-[#fce011] hover:bg-[#fce011]/90 text-black font-bold" disabled={isPropertyNextDisabled} onClick={() => { const next = new URLSearchParams(params); next.set("step", "5"); setParams(next, { replace: true }); setQuestionStep(5); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Next</Button>
                </div>
              </>
            )}

            {questionStep === 5 && (
              <>
                <div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {OWNERSHIP_TYPES.map(o => (
                      <label key={o} className={`px-4 py-3 rounded-xl border ${ownership === o ? "border-yellow-400 bg-yellow-50" : "border-gray-200"} cursor-pointer text-base hover:bg-yellow-50 transition focus-within:ring-2 focus-within:ring-yellow-300`}>
                        <input type="radio" name="ownership" className="hidden" checked={ownership === o} onChange={() => setOwnership(o)} />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Button variant="secondary" onClick={() => { const next = new URLSearchParams(params); next.set("step", "4"); setParams(next, { replace: true }); setQuestionStep(4); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back</Button>
                  <Button className="bg-[#fce011] hover:bg-[#fce011]/90 text-black font-bold" disabled={isOwnershipNextDisabled} onClick={() => { const next = new URLSearchParams(params); next.set("step", "6"); setParams(next, { replace: true }); setQuestionStep(6); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Next</Button>
                </div>
              </>
            )}

            {questionStep === 6 && (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <div className="text-sm font-medium text-gray-800 mb-2">Full Name</div>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" className="h-12 text-base" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800 mb-2">Email</div>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="h-12 text-base" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium text-gray-800 mb-2">Phone</div>
                  <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-5555" className="h-12 text-base" />
                </div>
                <label className="flex items-center gap-2 mt-4 text-sm text-gray-700">
                  <input type="checkbox" className="h-4 w-4" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                  I agree to be contacted about my project.
                </label>
                <div className="flex items-center justify-between mt-4">
                  <Button variant="secondary" onClick={() => { const next = new URLSearchParams(params); next.set("step", "5"); setParams(next, { replace: true }); setQuestionStep(5); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back</Button>
                  <Button
                    className="bg-[#fce011] hover:bg-[#fce011]/90 text-black font-bold"
                    disabled={!fullName || !email.includes("@") || phone.trim().length < 7 || !consent || selectedNeeds.length === 0}
                    onClick={() => {
                      const next = new URLSearchParams(params);
                      next.set("needs", selectedNeeds.join(","));
                      next.set("view", "results");
                      next.delete("step");
                      setParams(next, { replace: true });
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >Show Contractors</Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {view === "results" && (
        <>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Best matches in {zip}</h2>
            <div className="text-sm text-gray-600">{sortedResults.length} contractors</div>
          </div>
          <div className="mb-3 flex items-center justify-between gap-2">
            <Button variant="secondary" onClick={() => { const next = new URLSearchParams(params); next.set("view", "questions"); next.set("step", "1"); setParams(next, { replace: true }); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Edit answers</Button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <SlidersHorizontal className="w-4 h-4" /> Sort by
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                <option value="best">Best match</option>
                <option value="rating">Rating</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          <Separator className="mb-4" />

          {zip && sortedResults.length === 0 && (
            <div className="text-gray-700 bg-yellow-50 border border-yellow-200 p-6 rounded-lg flex items-center gap-4">
              <img src="/others.png" alt="No results" className="w-16 h-16 rounded-md border border-yellow-200" />
              <div>
                <div className="font-medium text-gray-900">No results found</div>
                <div className="text-sm">Try removing one of the selected needs or broadening the service.</div>
                <Button variant="secondary" className="mt-3" onClick={() => { const next = new URLSearchParams(params); next.set("view", "questions"); setParams(next, { replace: true }); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Adjust filters</Button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {sortedResults.map((c, idx) => {
              const isBest = idx < 3;
              const matchedService = !!(service && c.services.some((sv) => sv.toLowerCase().includes(service)));
              const matchedNeeds = selectedNeeds.filter((n) => c.services.includes(n));
              const score = (matchedService ? 2 : 0) + matchedNeeds.length;
              const maxScore = (service ? 2 : 0) + selectedNeeds.length;
              const pct = Math.round(maxScore > 0 ? (score / maxScore) * 100 : 100);
              const photos = getSamplePhotos(idx);
              const completed = 150 - idx * 4;
              const expYears = 10 + (idx % 6);
              return (
                <Card
                  key={c.id}
                  className={`group border border-gray-200 hover:shadow-lg transition-all duration-300 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  style={{ transitionDelay: `${Math.min(idx, 12) * 35}ms` }}
                >
                  <div className="flex gap-4 p-4">
                    {/* Thumbnail */}
                    <div className="relative w-44 h-28 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                      <img src={photos[0]} alt={`${c.name} cover`} className="h-full w-full object-cover" />
                      {isBest ? (
                        <Badge className="absolute left-2 top-2 bg-yellow-100 text-yellow-800 border-yellow-200">Featured</Badge>
                      ) : null}
                    </div>
                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-gray-900 text-base font-semibold flex items-center gap-2">
                            {c.name}
                            {c.rating && c.rating >= 4.5 ? <ShieldCheck className="w-4 h-4 text-green-600" /> : null}
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 ml-1"><Star className="w-4 h-4 text-yellow-500" />{c.rating?.toFixed(1) ?? '4.0'}</span>
                          </div>
                          <div className="mt-1 text-xs text-gray-600 flex items-center gap-3">
                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gray-500" /> {c.address.city}, {c.address.state}</span>
                            <span className="text-gray-400">•</span>
                            <span>{completed} projects</span>
                          </div>
                        </div>
                        <button className="h-8 w-8 rounded-lg bg-white grid place-items-center border border-gray-200" aria-label="Save">
                          <Bookmark className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {c.services.slice(0, 3).map((s) => (
                          <Badge key={s} variant="outline">{s}</Badge>
                        ))}
                        {c.services.length > 3 ? (
                          <Badge variant="secondary">+{c.services.length - 3} more</Badge>
                        ) : null}
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-6 text-sm text-gray-700">
                        <div className="flex justify-between"><span className="text-gray-600">Experience</span><span className="font-semibold">{expYears} years</span></div>
                        <div className="flex justify-between"><span className="text-gray-600">Projects completed</span><span className="font-semibold">{completed}</span></div>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <a href={`tel:${c.phone}`} aria-label={`Call ${c.name}`} className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-[#fce011] hover:bg-[#fce011]/90 text-black font-semibold"><Phone className="w-4 h-4" /> Call</a>
                        <Button variant="outline" className="h-9 px-3"><MessageCircle className="w-4 h-4" /> Chat</Button>
                        {c.website ? (
                          <a href={c.website} target="_blank" rel="noreferrer" aria-label={`${c.name} website`} className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"><Globe className="w-4 h-4" /> Website</a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}

      <div className="mt-8 text-center text-sm text-gray-600">
        <Link to="/" className="inline-block text-blue-600 hover:underline">Back to home</Link>
      </div>
    </div>
  );
};

export default Contractors;


