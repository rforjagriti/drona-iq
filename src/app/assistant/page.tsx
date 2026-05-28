"use client"

import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { askScholarAssistant } from '@/ai/flows/ai-scholar-assistant-flow';
import { GraduationCap, Send, Bot, User, Loader2, Sparkles, BrainCircuit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function AssistantPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am your Drona IQ Academic Mentor. How can I help you with your studies today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const response = await askScholarAssistant({ question: userMsg });
      setMessages(prev => [...prev, { role: 'assistant', content: response.answer }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-muted/10">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl">
              <BrainCircuit className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-headline text-primary">AI Scholar Assistant</h1>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Expert Mentor Online</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex gap-2">
            <Badge variant="outline" className="border-primary/20 text-primary">NDA Prep</Badge>
            <Badge variant="outline" className="border-primary/20 text-primary">JEE Foundation</Badge>
            <Badge variant="outline" className="border-primary/20 text-primary">CBSE Boards</Badge>
          </div>
        </div>

        <Card className="flex-1 flex flex-col border-none shadow-2xl bg-white overflow-hidden mb-4">
          <ScrollArea className="flex-1 p-6" viewportRef={scrollRef}>
            <div className="space-y-6">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex gap-4 max-w-[85%]",
                  msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                )}>
                  <div className={cn(
                    "h-10 w-10 rounded-xl shrink-0 flex items-center justify-center shadow-sm",
                    msg.role === 'assistant' ? "bg-primary text-accent" : "bg-accent text-white"
                  )}>
                    {msg.role === 'assistant' ? <Bot className="h-6 w-6" /> : <User className="h-6 w-6" />}
                  </div>
                  <div className={cn(
                    "p-5 rounded-2xl text-sm md:text-base leading-relaxed shadow-sm",
                    msg.role === 'assistant' 
                      ? "bg-muted/30 text-primary border border-muted" 
                      : "bg-primary text-white font-light"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-4 max-w-[85%] animate-pulse">
                  <div className="h-10 w-10 rounded-xl shrink-0 flex items-center justify-center bg-primary text-accent">
                    <Loader2 className="h-6 w-6 animate-spin" />
                  </div>
                  <div className="bg-muted/30 p-5 rounded-2xl border border-muted w-32">
                    <div className="h-4 bg-muted rounded w-full"></div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t bg-muted/5">
            <div className="max-w-4xl mx-auto relative">
              <Input 
                placeholder="Ask about a complex concept, NDA prep strategies, or homework help..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="pr-16 py-8 rounded-full border-primary/20 text-lg shadow-inner focus-visible:ring-accent"
              />
              <Button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-2 top-2 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-accent"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-center text-[10px] text-muted-foreground mt-3 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
              <Sparkles className="h-3 w-3 text-accent" /> Powered by Drona IQ Reasoning Core
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}