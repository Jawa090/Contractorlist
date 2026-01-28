import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Search,
  Plus,
  MoreVertical,
  Phone,
  Paperclip,
  Send,
  CheckCheck,
  FileText,
  Building2,
  MessageSquare,
  ArrowLeft,
  X,
  Users2,
  Smartphone,
  CalendarDays,
  Gavel,
  Truck,
  HardHat,
  Briefcase
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from '@/lib/utils';

const SubcontractorMessages = () => {
  const { toast } = useToast();
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [messageInput, setMessageInput] = useState('');
  const [sidebarWidth, setSidebarWidth] = useState(400);
  const [isResizing, setIsResizing] = useState(false);
  const [isNewChatModalOpen, setIsNewChatModalOpen] = useState(false);
  const [messagesList, setMessagesList] = useState<any[]>([]);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [sidebarTab, setSidebarTab] = useState<'all' | 'gc' | 'suppliers' | 'field'>('all');
  const [threadSearch, setThreadSearch] = useState('');
  const [isThreadSearchOpen, setIsThreadSearchOpen] = useState(false);

  // Resize Handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      setSidebarWidth((prevWidth) => {
        const newWidth = prevWidth + e.movementX;
        if (newWidth < 280) return 280;
        if (newWidth > 550) return 550;
        return newWidth;
      });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const chats = [
    {
      id: 1,
      name: 'Michael Scott (GC)',
      type: 'General Contractor',
      avatar: 'MS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      status: 'online',
      lastMessage: 'Received your bid for the HVAC phase. Looking solid.',
      time: '11:20 AM',
      unread: 1,
      project: 'Downtown Commercial Plaza',
      isGroup: false,
      role: 'Project Manager',
      company: 'Turner Construction',
      phone: '+1 555-012-3456'
    },
    {
      id: 2,
      name: 'Field Crew Alpha',
      type: 'Field Comms',
      avatar: 'FA',
      image: '',
      status: 'online',
      lastMessage: 'Site is ready for equipment delivery at 7 AM tomorrow.',
      time: '09:45 AM',
      unread: 3,
      project: 'Medical Center Annex',
      isGroup: true,
      members: ['You', 'Dave (Foreman)', 'Sarah (Safety)'],
      role: 'Site Coordination',
      company: 'Acme Construction Internal',
      phone: '+1 555-012-9988'
    },
    {
      id: 3,
      name: 'United Rentals',
      type: 'Supplier',
      avatar: 'UR',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=150&h=150',
      status: 'offline',
      lastMessage: 'The scissor lifts have been dispatched to the Austin site.',
      time: 'Yesterday',
      unread: 0,
      project: 'Downtown Commercial Plaza',
      isGroup: false,
      role: 'Equipment Specialist',
      company: 'United Rentals',
      phone: '+1 555-012-7766'
    },
    {
      id: 4,
      name: 'Sarah Jenkins (Skanska)',
      type: 'General Contractor',
      avatar: 'SJ',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      status: 'online',
      lastMessage: 'Need the insurance certs updated before we award the contract.',
      time: 'Yesterday',
      unread: 0,
      project: 'Riverside High Modernization',
      isGroup: false,
      role: 'Estimating Lead',
      company: 'Skanska USA',
      phone: '+1 555-012-1122'
    },
    {
      id: 5,
      name: 'ABC Supply Co.',
      type: 'Supplier',
      avatar: 'ABC',
      image: '',
      status: 'offline',
      lastMessage: 'Your custom ductwork quote is attached.',
      time: 'Mon',
      unread: 0,
      project: 'Medical Center Annex',
      isGroup: false,
      role: 'Account Manager',
      company: 'ABC Supply',
      phone: '+1 555-012-4433'
    }
  ];

  const initialMessages = [
    {
      id: 1,
      sender: 'them',
      senderName: 'Michael Scott',
      companyName: 'Turner Construction',
      content: 'Hey, thanks for getting that HVAC bid in early. The pricing looks very competitive.',
      time: '10:30 AM',
      date: 'Jan 26, 2026',
      status: 'read'
    },
    {
      id: 2,
      sender: 'me',
      senderName: 'Acme Estimating',
      companyName: 'Acme Construction',
      content: 'Glad to hear. We factored in the recent material cost drops to keep it tight. Let me know if you need a walkthrough of our mobilization plan.',
      time: '10:45 AM',
      date: 'Jan 26, 2026',
      status: 'read'
    },
    {
      id: 3,
      sender: 'them',
      senderName: 'Michael Scott',
      companyName: 'Turner Construction',
      content: 'Actually, yes. Can you upload those past performance logs we discussed for similar medical cleanrooms?',
      time: '11:10 AM',
      date: 'Jan 26, 2026',
      status: 'read'
    },
    {
      id: 4,
      sender: 'them',
      senderName: 'Michael Scott',
      companyName: 'Turner Construction',
      content: 'Received your bid for the HVAC phase. Looking solid.',
      time: '11:20 AM',
      date: 'Jan 26, 2026',
      status: 'read'
    }
  ];

  useEffect(() => {
    setMessagesList(initialMessages);
  }, []);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messagesList.length + 1,
      sender: 'me',
      senderName: 'Acme Admin',
      companyName: 'Acme Construction',
      content: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'sent'
    };

    setMessagesList([...messagesList, newMessage]);
    setMessageInput('');

    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Your project update has been delivered.",
      });
    }, 500);
  };

  const activeContact = chats.find(c => c.id === activeChat);

  return (
    <div className="flex h-[calc(100vh-64px)] w-full bg-white dark:bg-[#0f1115] overflow-hidden text-gray-900 dark:text-white transition-all duration-500">
      <div className="flex w-full h-full relative">

        {/* Conversations Sidebar */}
        <div
          className={cn(
            "flex flex-col border-r border-gray-200 dark:border-white/5 bg-gray-50/30 dark:bg-[#0f1115] shrink-0 z-20 transition-all",
            activeChat ? "hidden md:flex" : "flex w-full"
          )}
          style={{ width: `${sidebarWidth}px` }}
        >
          <div className="p-6 border-b border-gray-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/20">
                  <MessageSquare className="text-black" size={20} />
                </div>
                <div>
                  <h1 className="text-xl font-black tracking-tight uppercase">Communications</h1>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Marketplace & Project Hub</p>
                </div>
              </div>
              <Button
                size="icon"
                onClick={() => setIsNewChatModalOpen(true)}
                className="bg-black dark:bg-white text-white dark:text-black h-9 w-9 rounded-xl hover:scale-105 transition-transform"
              >
                <Plus size={18} />
              </Button>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by GC, Supplier or Project..."
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                className="pl-10 h-11 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-xl text-xs font-semibold focus-visible:ring-yellow-400 shadow-sm"
              />
            </div>

            <div className="flex gap-1 bg-gray-200/50 dark:bg-white/5 p-1 rounded-xl">
              <button
                onClick={() => setSidebarTab('all')}
                className={cn("flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all", sidebarTab === 'all' ? "bg-white dark:bg-white/10 text-yellow-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >All</button>
              <button
                onClick={() => setSidebarTab('gc')}
                className={cn("flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all", sidebarTab === 'gc' ? "bg-white dark:bg-white/10 text-yellow-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >GCs</button>
              <button
                onClick={() => setSidebarTab('suppliers')}
                className={cn("flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all", sidebarTab === 'suppliers' ? "bg-white dark:bg-white/10 text-yellow-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >Suppliers</button>
              <button
                onClick={() => setSidebarTab('field')}
                className={cn("flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all", sidebarTab === 'field' ? "bg-white dark:bg-white/10 text-yellow-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >Field</button>
            </div>
          </div>

          <ScrollArea className="flex-1 px-3 py-4">
            <div className="space-y-6">
              {Object.entries(
                chats
                  .filter(c => {
                    const matchesSearch = c.name.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
                      c.project.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
                      c.company.toLowerCase().includes(sidebarSearch.toLowerCase());
                    const matchesTab = sidebarTab === 'all' ||
                      (sidebarTab === 'gc' && c.type === 'General Contractor') ||
                      (sidebarTab === 'suppliers' && c.type === 'Supplier') ||
                      (sidebarTab === 'field' && c.type === 'Field Comms');
                    return matchesSearch && matchesTab;
                  })
                  .reduce((acc, chat) => {
                    const project = chat.project;
                    if (!acc[project]) acc[project] = [];
                    acc[project].push(chat);
                    return acc;
                  }, {} as Record<string, typeof chats>)
              ).map(([project, projectChats]) => (
                <div key={project} className="space-y-2">
                  <div className="px-3 py-1">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <Building2 size={12} className="text-yellow-600" />
                      {project}
                    </h3>
                  </div>
                  {projectChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={cn(
                        "p-4 rounded-2xl cursor-pointer transition-all border border-transparent group relative overflow-hidden",
                        activeChat === chat.id ? "bg-white dark:bg-white/5 shadow-md border-gray-100 dark:border-white/10" : "hover:bg-gray-100/50 dark:hover:bg-white/[0.02]"
                      )}
                    >
                      <div className="flex items-start gap-4 h-full relative z-10">
                        <div className="relative shrink-0">
                          <Avatar className="w-12 h-12 rounded-xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all shadow-sm">
                            <AvatarImage src={chat.image} className="object-cover" />
                            <AvatarFallback className="bg-gray-200 dark:bg-white/10 font-bold">{chat.avatar}</AvatarFallback>
                          </Avatar>
                          {chat.status === 'online' && (
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-[#0f1115] rounded-full shadow-lg"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-black text-xs truncate uppercase tracking-tight">{chat.name}</p>
                            <span className="text-[9px] font-bold text-gray-400">{chat.time}</span>
                          </div>
                          <p className="text-[11px] font-medium text-gray-500 truncate leading-relaxed mb-2">{chat.lastMessage}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={cn(
                              "text-[8px] px-2 py-0 h-4 border-none font-black uppercase tracking-wider",
                              chat.type === 'General Contractor' ? "bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600" :
                                chat.type === 'Supplier' ? "bg-orange-100 dark:bg-orange-500/10 text-orange-600" :
                                  "bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600"
                            )}>
                              {chat.type}
                            </Badge>
                            {chat.unread > 0 && (
                              <Badge className="bg-yellow-400 text-black text-[9px] px-1.5 py-0 h-4 font-black rounded-md">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Resizer */}
        <div
          className="w-0.5 cursor-col-resize hover:bg-yellow-400/50 active:bg-yellow-500 transition-colors z-30 hidden md:block"
          onMouseDown={(e) => { e.preventDefault(); setIsResizing(true); }}
        />

        {/* Chat Area */}
        <div className={cn("flex-1 flex flex-col min-w-0 bg-white dark:bg-[#0f1115] relative", !activeChat && "hidden md:flex")}>
          {activeContact ? (
            <>
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-white/5 flex items-center justify-between bg-white/50 dark:bg-black/10 backdrop-blur-xl z-20">
                <div className="flex items-center gap-4 min-w-0">
                  <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setActiveChat(null)}>
                    <ArrowLeft size={18} />
                  </Button>
                  <div className="relative">
                    <Avatar className="w-12 h-12 rounded-xl border border-yellow-500/20 shadow-xl">
                      <AvatarImage src={activeContact.image} className="object-cover" />
                      <AvatarFallback className="bg-yellow-500/10 text-yellow-600 font-black">{activeContact.avatar}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="font-black text-sm uppercase tracking-tight truncate">{activeContact.name}</h2>
                      <Badge variant="outline" className="text-[8px] border-gray-200 dark:border-white/10 uppercase font-black text-gray-500">{activeContact.role}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                      <Building2 size={10} className="text-yellow-600" /> {activeContact.company}
                      <span className="opacity-20">•</span>
                      <Briefcase size={10} className="text-yellow-600" /> {activeContact.project}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/5 mr-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-sm animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Marketplace Active</span>
                  </div>

                  {isThreadSearchOpen ? (
                    <div className="relative flex items-center bg-gray-100 dark:bg-white/5 rounded-xl px-3 py-2 border border-yellow-400/30">
                      <Search className="w-3.5 h-3.5 text-yellow-600 mr-2 shadow-sm" />
                      <input
                        autoFocus
                        placeholder="Search thread..."
                        value={threadSearch}
                        onChange={(e) => setThreadSearch(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 text-xs w-28 md:w-48 font-semibold"
                      />
                      <button onClick={() => { setIsThreadSearchOpen(false); setThreadSearch(''); }} className="text-gray-400 hover:text-white transition-colors"><X size={14} /></button>
                    </div>
                  ) : (
                    <Button variant="ghost" size="icon" onClick={() => setIsThreadSearchOpen(true)} className="rounded-xl hover:bg-gray-100 dark:hover:bg-white/5"><Search size={18} /></Button>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gray-100 dark:hover:bg-white/5"><MoreVertical size={18} /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10">
                      <DropdownMenuItem className="gap-2 text-xs font-bold uppercase py-3 cursor-pointer"><FileText size={14} /> View Bid Details</DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-xs font-bold uppercase py-3 cursor-pointer"><HardHat size={14} /> Site Safety Logs</DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-xs font-bold uppercase py-3 cursor-pointer text-red-500"><X size={14} /> Archive Conversation</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <div className="w-px h-8 bg-gray-200 dark:bg-white/10 mx-1"></div>

                  <Button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest px-6 h-10 rounded-xl shadow-lg shadow-yellow-400/20 active:scale-95 transition-all"
                    onClick={() => window.location.href = `tel:${activeContact.phone}`}
                  >
                    Quick Call
                  </Button>
                </div>
              </div>

              {/* Messages Feed */}
              <ScrollArea className="flex-1 overflow-x-hidden bg-gray-50/10 dark:bg-transparent">
                <div className="p-8 space-y-10 max-w-5xl mx-auto">
                  {messagesList.filter(m =>
                    m.content.toLowerCase().includes(threadSearch.toLowerCase()) ||
                    m.senderName.toLowerCase().includes(threadSearch.toLowerCase())
                  ).map((m, idx) => {
                    const isLast = idx === messagesList.length - 1;
                    return (
                      <div key={m.id} className={cn("flex group transition-all", m.sender === 'me' ? "justify-end" : "justify-start")}>
                        <div className={cn("flex flex-col gap-2", m.sender === 'me' ? "items-end" : "items-start")}>
                          <div className="flex items-center gap-3 mb-1 px-1">
                            <span className={cn("text-[9px] font-black uppercase tracking-widest", m.sender === 'me' ? "text-yellow-600" : "text-gray-400")}>{m.senderName}</span>
                            <span className="text-[8px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-tighter">{m.time}</span>
                          </div>

                          <div className={cn(
                            "max-w-[85%] rounded-[1.75rem] p-5 shadow-sm relative group/msg transition-all duration-300",
                            m.sender === 'me'
                              ? "bg-black dark:bg-yellow-500 text-white dark:text-black rounded-tr-sm hover:translate-x-[-4px]"
                              : "bg-white dark:bg-[#1c1e24] border border-gray-100 dark:border-white/5 text-gray-800 dark:text-gray-200 rounded-tl-sm hover:translate-x-[4px]"
                          )}>
                            <p className="text-sm font-medium leading-relaxed tracking-tight">{m.content}</p>

                            {m.attachment && (
                              <div className={cn(
                                "mt-4 p-4 rounded-2xl flex items-center gap-4 transition-colors",
                                m.sender === 'me' ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/30"
                              )}>
                                <div className="w-10 h-10 rounded-xl bg-yellow-400/20 flex items-center justify-center text-yellow-600">
                                  <FileText size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-black truncate uppercase tracking-tight">{m.attachment.name}</p>
                                  <p className="text-[10px] font-bold opacity-60 uppercase">{m.attachment.size} • PDF Document</p>
                                </div>
                              </div>
                            )}

                            {m.sender === 'me' && (
                              <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover/msg:opacity-100 transition-opacity">
                                <CheckCheck size={16} className="text-yellow-500" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="h-4"></div>
                </div>
              </ScrollArea>

              {/* Premium Input Bridge */}
              <div className="p-6 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-[#0f1115] relative z-20">
                <div className="max-w-4xl mx-auto">
                  <div className="relative group/input flex items-end gap-3 p-2 bg-gray-50/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] focus-within:border-yellow-400/50 focus-within:ring-4 focus-within:ring-yellow-400/5 transition-all">
                    <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-gray-400 hover:text-yellow-600 hover:bg-yellow-400/10 shrink-0">
                      <Paperclip size={22} className="rotate-45" />
                    </Button>

                    <div className="flex-1 py-3 px-2">
                      <textarea
                        rows={1}
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        placeholder="Type an RFI response or project update..."
                        className="w-full bg-transparent border-none focus:ring-0 text-sm font-semibold p-0 resize-none max-h-32 scrollbar-hide py-1"
                      />
                    </div>

                    <Button
                      onClick={handleSendMessage}
                      disabled={!messageInput.trim()}
                      className={cn(
                        "h-12 w-12 rounded-full shrink-0 transition-all duration-300 shadow-xl",
                        messageInput.trim()
                          ? "bg-yellow-400 text-black scale-100 hover:scale-110 active:scale-95"
                          : "bg-gray-200 dark:bg-white/5 text-gray-400 scale-90 grayscale cursor-not-allowed opacity-50"
                      )}
                    >
                      <Send size={20} className={messageInput.trim() ? "translate-x-0.5" : ""} />
                    </Button>
                  </div>

                  <div className="mt-3 flex items-center justify-between px-6">
                    <div className="flex gap-4">
                      <button className="text-[9px] font-black uppercase text-gray-400 hover:text-yellow-600 transition-colors flex items-center gap-1.5">
                        <FileText size={12} /> Attach Quote
                      </button>
                      <button className="text-[9px] font-black uppercase text-gray-400 hover:text-yellow-600 transition-colors flex items-center gap-1.5">
                        <Truck size={12} /> Dispatch Update
                      </button>
                    </div>
                    <p className="text-[9px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-widest">Enterprise Encrypted</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-white dark:bg-[#0f1115]">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400/20 blur-3xl group-hover:bg-yellow-400/30 transition-all duration-700"></div>
                <div className="w-24 h-24 bg-white dark:bg-white/10 rounded-[2.5rem] flex items-center justify-center relative border border-gray-100 dark:border-white/5 shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  <MessageSquare className="text-yellow-600" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-black tracking-tighter uppercase mb-3">Project Workspace Ready</h3>
              <p className="text-gray-500 max-w-sm font-bold text-sm leading-relaxed uppercase tracking-wide opacity-60">
                Securely collaborate with Tier 1 GCs, coordinate field logistics, and manage supply chain comms.
              </p>
              <div className="mt-10 flex gap-4">
                <Button onClick={() => setIsNewChatModalOpen(true)} className="bg-black dark:bg-white text-white dark:text-black px-8 py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all">Start New Signal</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* New Signal Modal */}
      <Dialog open={isNewChatModalOpen} onOpenChange={setIsNewChatModalOpen}>
        <DialogContent className="bg-white dark:bg-[#14161b] border-gray-200 dark:border-white/5 text-gray-900 dark:text-white rounded-[2rem] overflow-hidden max-w-xl p-0">
          <div className="bg-yellow-400 p-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-black uppercase tracking-tight">Open New Signal</h2>
              <p className="text-[10px] font-bold text-black/60 uppercase tracking-widest mt-1">Direct Market & Project Connection</p>
            </div>
            <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center text-black">
              <Plus size={24} />
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Recipient Identification</Label>
              <Input placeholder="Search GCs (e.g. Skanska, Turner) or Suppliers..." className="h-12 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-2xl text-sm font-semibold" />
            </div>

            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Marketplace Context</Label>
              <Select>
                <SelectTrigger className="h-12 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-2xl text-sm font-semibold">
                  <SelectValue placeholder="Link to Active Bid/Project" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10">
                  <SelectItem value="none">Standalone Message</SelectItem>
                  <SelectItem value="audit">Downtown Commercial Ph 1</SelectItem>
                  <SelectItem value="medical">Medical Annex (Bid# 29402)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Signal Message</Label>
              <textarea
                className="w-full h-32 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-semibold resize-none focus:ring-2 focus:ring-yellow-400 active:outline-none focus:outline-none"
                placeholder="Briefly describe the RFI or proposal update..."
              />
            </div>
          </div>

          <div className="p-8 pt-0 flex gap-4">
            <Button variant="ghost" className="flex-1 h-12 rounded-2xl font-black uppercase tracking-widest text-[11px]" onClick={() => setIsNewChatModalOpen(false)}>Abort</Button>
            <Button className="flex-1 h-12 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl hover:scale-105 transition-all" onClick={() => setIsNewChatModalOpen(false)}>Transmit Signal</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubcontractorMessages;