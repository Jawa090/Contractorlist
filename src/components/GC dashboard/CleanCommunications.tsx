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
  Video,
  Paperclip,
  Send,
  CheckCheck,
  FileText,
  Building2,
  MessageSquare,
  ArrowLeft,
  X,
  Users,
  Smartphone,
  Users2,
  CalendarDays
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
import { cn } from '@/lib/utils';

const CleanCommunications = () => {
  const { toast } = useToast();
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [messageInput, setMessageInput] = useState('');
  const [sidebarWidth, setSidebarWidth] = useState(420);
  const [isResizing, setIsResizing] = useState(false);
  const [isNewChatModalOpen, setIsNewChatModalOpen] = useState(false);
  const [messagesList, setMessagesList] = useState<any[]>([]);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [sidebarTab, setSidebarTab] = useState<'all' | 'private' | 'groups'>('all');
  const [threadSearch, setThreadSearch] = useState('');
  const [isThreadSearchOpen, setIsThreadSearchOpen] = useState(false);

  // Resize Handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      setSidebarWidth((prevWidth) => {
        const newWidth = prevWidth + e.movementX;
        if (newWidth < 250) return 250;
        if (newWidth > 600) return 600;
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
      name: 'VoltMaster Electric',
      type: 'Subcontractor',
      avatar: 'VM',
      image: 'https://images.unsplash.com/photo-1542384701-c0e46e4c7980?auto=format&fit=crop&q=80&w=150&h=150',
      status: 'online',
      lastMessage: 'The revised wiring layout for the 2nd floor has been uploaded.',
      time: '12:42 PM',
      unread: 2,
      project: 'Downtown Office Renovation',
      isGroup: false,
      contactName: 'James Wilson',
      companyName: 'VoltMaster Electric',
      phone: '+1 555-010-1234'
    },
    {
      id: 2,
      name: 'Downtown Office Team',
      type: 'Project Group',
      avatar: 'DT',
      image: '',
      status: 'online',
      lastMessage: 'Let\'s finalize the phase 1 docs tonight.',
      time: '1:05 PM',
      unread: 5,
      project: 'Downtown Office Renovation',
      isGroup: true,
      members: ['You', 'James Wilson', 'Sarah Chen'],
      companyName: 'Project Group',
      phone: '+1 555-010-4321'
    },
    {
      id: 3,
      name: 'Sarah Chen',
      type: 'Architect',
      avatar: 'SC',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      status: 'offline',
      lastMessage: 'Can we schedule a walkthrough for next Tuesday?',
      time: '10:15 AM',
      unread: 0,
      project: 'Medical Center Expansion',
      isGroup: false,
      contactName: 'Sarah Chen',
      companyName: 'Chen Architects',
      phone: '+1 555-010-5678'
    },
    {
      id: 4,
      name: 'Titan Concrete Pros',
      type: 'Subcontractor',
      avatar: 'TC',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=150&h=150',
      status: 'online',
      lastMessage: 'Pouring schedule updated due to weather forecast.',
      time: 'Yesterday',
      unread: 0,
      project: 'Riverside Apartments',
      isGroup: false,
      contactName: 'Mike Ross',
      companyName: 'Titan Concrete Pros',
      phone: '+1 555-010-9876'
    },
    {
      id: 5,
      name: 'Med Center Expansion Team',
      type: 'Project Group',
      avatar: 'MC',
      image: '',
      status: 'offline',
      lastMessage: 'Sarah has shared the latest floor plans.',
      time: 'Mon',
      unread: 0,
      project: 'Medical Center Expansion',
      isGroup: true,
      members: ['You', 'Sarah Chen', 'Robert Fox'],
      companyName: 'Project Group',
      phone: '+1 555-010-7777'
    },
    {
      id: 6,
      name: 'Riverside Apartment Group',
      type: 'Project Group',
      avatar: 'RA',
      image: '',
      status: 'online',
      lastMessage: 'Mike: We are ready for the inspection tomorrow.',
      time: '2 days ago',
      unread: 0,
      project: 'Riverside Apartments',
      isGroup: true,
      members: ['You', 'Mike Ross', 'Courtney Henry'],
      companyName: 'Project Group',
      phone: '+1 555-010-8888'
    }
  ];

  const initialMessages = [
    {
      id: 1,
      sender: 'them',
      senderName: 'James Wilson',
      companyName: 'VoltMaster Electric',
      content: 'Hey, just wanted to check on the status of the electrical rough-in for the Downtown Commercial project.',
      time: '12:30 PM',
      date: 'Jan 26, 2026',
      status: 'read'
    },
    {
      id: 2,
      sender: 'me',
      senderName: 'Gorde Omkar',
      companyName: 'Acme Construction',
      content: 'We are on track. The crew is finishing up the conduit work on the 2nd floor today.',
      time: '12:35 PM',
      date: 'Jan 26, 2026',
      status: 'read'
    },
    {
      id: 3,
      sender: 'them',
      senderName: 'James Wilson',
      companyName: 'VoltMaster Electric',
      content: 'Great. Also, did you see the RFI response regarding the panel location?',
      time: '12:38 PM',
      date: 'Jan 26, 2026',
      status: 'read'
    },
    {
      id: 4,
      sender: 'them',
      senderName: 'James Wilson',
      companyName: 'VoltMaster Electric',
      content: 'The revised wiring layout for the 2nd floor has been uploaded.',
      time: '12:42 PM',
      date: 'Jan 26, 2026',
      status: 'read',
      attachment: { type: 'file', name: '2nd_Floor_Electrical_Rev2.pdf', size: '2.4 MB' }
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
      senderName: 'Gorde Omkar',
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
        description: "Your message has been delivered.",
      });
    }, 500);
  };

  const activeContact = chats.find(c => c.id === activeChat);

  return (
    <div className="flex h-full w-full bg-gray-50 dark:bg-[#0f1115] overflow-hidden text-gray-900 dark:text-white font-sans transition-colors duration-300">
      <div className="flex w-full max-w-7xl mx-auto h-full relative z-10">
        {/* Conversations Sidebar */}
        <div
          className={cn(
            "flex flex-col border-r border-gray-200 dark:border-white/5 bg-white dark:bg-[#14161b] shrink-0 sticky left-0 z-20",
            activeChat ? "hidden md:flex" : "flex"
          )}
          style={{ width: `${sidebarWidth}px`, maxWidth: '100%' }}
        >
          <div className="p-4 border-b border-gray-200 dark:border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold">Messages</h1>
              <Button
                size="icon"
                onClick={() => setIsNewChatModalOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black h-8 w-8 rounded-full"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                className="pl-9 h-10 bg-gray-100 dark:bg-[#1c1e24] border-none rounded-xl"
              />
            </div>

            <div className="flex gap-1 bg-gray-100 dark:bg-black/20 p-1 rounded-xl">
              <button
                onClick={() => setSidebarTab('all')}
                className={cn("flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all", sidebarTab === 'all' ? "bg-white dark:bg-[#2a2d35] text-yellow-600 shadow-sm" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300")}
              >All</button>
              <button
                onClick={() => setSidebarTab('private')}
                className={cn("flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all", sidebarTab === 'private' ? "bg-white dark:bg-[#2a2d35] text-yellow-600 shadow-sm" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300")}
              >Private</button>
              <button
                onClick={() => setSidebarTab('groups')}
                className={cn("flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all", sidebarTab === 'groups' ? "bg-white dark:bg-[#2a2d35] text-yellow-600 shadow-sm" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300")}
              >Groups</button>
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-2 space-y-6">
              {Object.entries(
                chats
                  .filter(c => {
                    const matchesSearch = c.name.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
                      c.project.toLowerCase().includes(sidebarSearch.toLowerCase());
                    const matchesTab = sidebarTab === 'all' ||
                      (sidebarTab === 'private' && !c.isGroup) ||
                      (sidebarTab === 'groups' && c.isGroup);
                    return matchesSearch && matchesTab;
                  })
                  .reduce((acc, chat) => {
                    const project = chat.project;
                    if (!acc[project]) acc[project] = [];
                    acc[project].push(chat);
                    return acc;
                  }, {} as Record<string, typeof chats>)
              ).map(([project, projectChats]) => (
                <div key={project} className="space-y-1">
                  <div className="px-3 py-2">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 flex items-center gap-2">
                      <Building2 className="w-3 h-3" />
                      {project}
                    </h3>
                  </div>
                  {projectChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={cn(
                        "p-3 rounded-xl cursor-pointer transition-all border border-transparent",
                        activeChat === chat.id ? "bg-yellow-50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/20" : "hover:bg-gray-100 dark:hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative shrink-0">
                          <Avatar className="w-10 h-10 border border-gray-200 dark:border-white/10">
                            <AvatarImage src={chat.image} className="object-cover" />
                            <AvatarFallback>{chat.avatar}</AvatarFallback>
                          </Avatar>
                          {chat.isGroup ? (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center border-2 border-white dark:border-[#14161b]">
                              <Users2 size={8} />
                            </div>
                          ) : chat.status === 'online' && (
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-yellow-500 border-2 border-white dark:border-[#14161b] rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-sm truncate">{chat.name}</p>
                            <span className="text-[10px] text-gray-500">{chat.time}</span>
                          </div>
                          <p className="text-xs text-gray-500 truncate mb-1">{chat.lastMessage}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-[8px] px-1 py-0 h-3 border-gray-100 dark:border-white/5 text-gray-500">
                              {chat.type}
                            </Badge>
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
          className="w-1 cursor-col-resize hover:bg-yellow-400 active:bg-yellow-500 transition-colors z-30 hidden md:block"
          onMouseDown={(e) => { e.preventDefault(); setIsResizing(true); }}
        />

        {/* Chat Area */}
        <div className={cn("flex-1 flex flex-col min-w-0 relative", !activeChat && "hidden md:flex")}>
          {activeContact ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-gray-200 dark:border-white/5 bg-white/50 dark:bg-[#14161b]/50 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setActiveChat(null)}>
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <Avatar className="w-10 h-10 border border-yellow-500/20 shadow-lg">
                    <AvatarImage src={activeContact.image} className="object-cover" />
                    <AvatarFallback>{activeContact.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <h2 className="font-bold truncate">{activeContact.name}</h2>
                    <p className="text-xs text-gray-500 truncate">{activeContact.project}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isThreadSearchOpen ? (
                    <div className="relative flex items-center bg-gray-100 dark:bg-white/5 rounded-full px-3 py-1 border border-yellow-500/30">
                      <Search className="w-3.5 h-3.5 text-yellow-600 mr-2" />
                      <input
                        autoFocus
                        placeholder="Search thread..."
                        value={threadSearch}
                        onChange={(e) => setThreadSearch(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 text-xs w-24 md:w-40"
                      />
                      <button onClick={() => { setIsThreadSearchOpen(false); setThreadSearch(''); }}><X size={14} /></button>
                    </div>
                  ) : (
                    <Button variant="ghost" size="icon" onClick={() => setIsThreadSearchOpen(true)}><Search size={18} /></Button>
                  )}

                  {!activeContact.isGroup && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-yellow-600 hover:bg-yellow-500/10"
                      onClick={() => {
                        const groupChat = chats.find(c => c.isGroup && c.project === activeContact.project);
                        if (groupChat) {
                          setActiveChat(groupChat.id);
                        } else {
                          toast({ title: "No Group Chat", description: `No group thread found for ${activeContact.project}.` });
                        }
                      }}
                      title="Jump to Project Group Chat"
                    >
                      <Users2 size={18} />
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                    onClick={() => {
                      if (activeContact?.phone) {
                        window.location.href = `tel:${activeContact.phone}`;
                      } else {
                        toast({ title: "No Phone Number", description: "This contact does not have a phone number listed.", variant: "destructive" });
                      }
                    }}
                    title="Call Contact"
                  >
                    <Phone size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                    onClick={() => {
                      if (activeContact?.phone) {
                        window.location.href = `sms:${activeContact.phone}`;
                      } else {
                        toast({ title: "No Phone Number", description: "This contact does not have a phone number listed.", variant: "destructive" });
                      }
                    }}
                    title="Send SMS"
                  >
                    <Smartphone size={18} />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1">
                <div className="p-6 space-y-6">
                  {messagesList.filter(m =>
                    m.content.toLowerCase().includes(threadSearch.toLowerCase()) ||
                    m.senderName.toLowerCase().includes(threadSearch.toLowerCase())
                  ).map((m) => (
                    <div key={m.id} className={cn("flex", m.sender === 'me' ? "justify-end" : "justify-start")}>
                      <div className={cn("max-w-[80%] rounded-2xl p-4 shadow-sm", m.sender === 'me' ? "bg-yellow-400 text-black rounded-tr-sm" : "bg-white dark:bg-[#1c1e24] border border-gray-200 dark:border-white/5 text-gray-800 dark:text-gray-200 rounded-tl-sm")}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn("text-[10px] font-black uppercase", m.sender === 'me' ? "text-black/70" : "text-yellow-600")}>{m.senderName}</span>
                          <span className="text-[8px] font-bold text-gray-400">• {m.companyName}</span>
                        </div>
                        <p className="text-sm leading-relaxed">{m.content}</p>
                        {m.attachment && (
                          <div className="mt-3 p-3 rounded-lg bg-black/5 flex items-center gap-3">
                            <FileText size={18} />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold truncate">{m.attachment.name}</p>
                              <p className="text-[10px] opacity-60">{m.attachment.size}</p>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/5 text-[8px] font-bold uppercase">
                          <span className="flex items-center gap-1"><CalendarDays size={10} /> {m.date}</span>
                          <span className="flex items-center gap-1">{m.time} {m.sender === 'me' && <CheckCheck size={10} />}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-[#14161b]">
                <div className="flex items-center gap-2 max-w-4xl mx-auto">
                  <Button variant="ghost" size="icon" className="text-gray-400"><Paperclip size={20} /></Button>
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-100 dark:bg-[#1c1e24] border-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className={cn("h-10 w-10 p-0 rounded-xl transition-all", messageInput.trim() ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-400")}
                    disabled={!messageInput.trim()}
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-center p-6">
              <div className="max-w-md">
                <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Select a conversation</h3>
                <p className="text-gray-500">Choose a team member or project group to start messaging.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* New Chat Modal */}
      <Dialog open={isNewChatModalOpen} onOpenChange={setIsNewChatModalOpen}>
        <DialogContent className="bg-white dark:bg-[#1c1e24] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
          <DialogHeader>
            <DialogTitle>New Message</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>To</Label>
              <Input placeholder="Search people or projects..." className="bg-gray-100 dark:bg-black/20" />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <textarea
                className="w-full h-32 p-3 rounded-xl bg-gray-100 dark:bg-black/20 border-none text-sm resize-none"
                placeholder="Write your message..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsNewChatModalOpen(false)}>Cancel</Button>
            <Button className="bg-yellow-400 text-black" onClick={() => setIsNewChatModalOpen(false)}>Start Chat</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CleanCommunications;
