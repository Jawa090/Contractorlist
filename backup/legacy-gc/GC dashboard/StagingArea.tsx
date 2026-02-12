import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Terminal,
    Activity,
    ShieldCheck,
    Globe,
    Server,
    GitBranch,
    Play,
    RotateCcw,
    CheckCircle2,
    Clock,
    Layers,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const StagingArea = () => {
    const [isDeploying, setIsDeploying] = useState(false);

    const pipelines = [
        { name: "Production", status: "Healthy", version: "v4.2.0-stable", lastDeploy: "2h ago", health: 100 },
        { name: "Staging", status: "Ready", version: "v4.2.1-rc3", lastDeploy: "1d ago", health: 98 },
        { name: "Development", status: "Build Failed", version: "v4.3.0-alpha", lastDeploy: "5m ago", health: 45 }
    ];

    return (
        <div className="flex-1 w-full bg-[#0f1115] text-white pb-20 font-sans">
            <div className="bg-[#1c1e24] border-b border-white/5 px-8 py-12 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[100px] rounded-full -mr-48 -mt-48" />
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                            <Terminal className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black tracking-tight uppercase">CI/CD Staging Area</h1>
                            <p className="text-gray-400 font-bold text-sm flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-white" /> Platform Deployment Ecosystem
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" className="rounded-2xl h-12 px-6 font-black uppercase text-xs tracking-widest text-gray-400 hover:text-white hover:bg-white/5">View Logs</Button>
                        <Button
                            onClick={() => { setIsDeploying(true); setTimeout(() => setIsDeploying(false), 2000); }}
                            disabled={isDeploying}
                            className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-2xl h-12 px-8 font-black uppercase text-xs tracking-widest shadow-2xl shadow-yellow-500/20 disabled:opacity-50"
                        >
                            {isDeploying ? <RotateCcw className="w-4 h-4 mr-2 animate-spin" /> : <Play className="w-4 h-4 mr-2 fill-current" />}
                            Trigger Global Sync
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {pipelines.map(p => (
                        <Card key={p.name} className="bg-[#1c1e24] border-white/5 rounded-[2.5rem] p-8 hover:border-yellow-500/30 transition-all duration-500 group">
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "w-3 h-3 rounded-full shadow-[0_0_15px]",
                                        p.status === 'Healthy' ? "bg-white shadow-white/50" :
                                            p.status === 'Ready' ? "bg-yellow-500 shadow-yellow-500/50" :
                                                "bg-gray-500 shadow-gray-500/50 animate-pulse"
                                    )} />
                                    <h3 className="text-xl font-black tracking-tight">{p.name}</h3>
                                </div>
                                <Badge className="bg-white/5 hover:bg-white/10 text-gray-400 border-none font-bold text-[10px]">
                                    {p.version}
                                </Badge>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest text-[9px]">Environment Health</p>
                                    <p className="text-xs font-black">{p.health}%</p>
                                </div>
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className={cn(
                                            "h-full rounded-full transition-all duration-1000",
                                            p.health > 90 ? "bg-white" : p.health > 50 ? "bg-yellow-500" : "bg-gray-500"
                                        )}
                                        style={{ width: `${p.health}%` }}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-black/20 rounded-2xl">
                                    <p className="text-[9px] font-black uppercase text-gray-500 mb-1">Last Deployment</p>
                                    <p className="text-xs font-bold flex items-center gap-1.5"><Clock className="w-3 h-3 text-yellow-500" /> {p.lastDeploy}</p>
                                </div>
                                <div className="p-4 bg-black/20 rounded-2xl">
                                    <p className="text-[9px] font-black uppercase text-gray-500 mb-1">Status Code</p>
                                    <p className="text-xs font-bold flex items-center gap-1.5"><Activity className="w-3 h-3 text-white" /> {p.status}</p>
                                </div>
                            </div>

                            <Button className="w-full h-11 bg-white/5 hover:bg-yellow-500 hover:text-black rounded-xl font-black uppercase text-[10px] tracking-widest transition-all">
                                Manage Instance <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </Card>
                    ))}
                </div>

                <div className="bg-[#1c1e24] border border-white/5 rounded-[3rem] p-10 overflow-hidden relative">
                    <div className="flex items-center gap-3 mb-8">
                        <GitBranch className="w-6 h-6 text-yellow-500" />
                        <h2 className="text-2xl font-black tracking-tight uppercase">Recent Commit Stream</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            { author: "DevAlpha", msg: "core: finalized marketplace integration logic", branch: "main", hash: "8f2a1b", time: "12m ago" },
                            { author: "ArchNode", msg: "feat: added multi-channel notification handlers", branch: "staging", hash: "4c9d0x", time: "45m ago" },
                            { author: "BetaStack", msg: "fix: corrected z-index collision in dashboard", branch: "dev", hash: "2e1f4m", time: "2h ago" }
                        ].map((commit, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-[1.5rem] bg-black/20 border border-white/5 hover:border-white/10 transition-all group">
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-black text-xs">
                                        {commit.author[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold group-hover:text-yellow-500 transition-colors">{commit.msg}</p>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded uppercase font-black tracking-widest text-gray-400">{commit.branch}</span>
                                            <span className="text-[10px] font-black text-gray-600">{commit.hash}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-gray-500 uppercase">{commit.time}</p>
                                    <Button variant="link" className="h-auto p-0 text-[10px] font-black uppercase text-yellow-500 hover:no-underline">View Diff</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StagingArea;
