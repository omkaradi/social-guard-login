import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LogOut, 
  User, 
  BarChart3, 
  Monitor, 
  Wifi, 
  Calendar,
  Phone,
  Mail,
  Users,
  FileText,
  Globe,
  Settings,
  Menu,
  X,
  ArrowLeft,
  Filter,
  Download,
  ChevronDown
} from 'lucide-react';
import jodoLogo from '@/assets/jodoworld-logo.png';

const Toolbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate('/modules');
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'media-traffic', label: 'Media Traffic', icon: Monitor },
    { id: 'voice', label: 'Voice', icon: Phone },
    { id: 'mail', label: 'Mail', icon: Mail },
    { id: 'social-media', label: 'Social Media', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'location', label: 'Location', icon: Globe },
    { id: 'team-messaging', label: 'Team Messaging', icon: Users },
  ];

  const mediaTrafficData = [
    {
      process: 'Bank Help',
      user: 'Omkar Ad...',
      customer: '--',
      media: ['💬', '📞'],
      date: '23-Jan-24 10:49:08 AM',
      disposition: 'loan settl... Pending v...',
      location: 'India Mumbai',
      supervisor: 'NA'
    },
    {
      process: 'Bank Hom...',
      user: 'Omkar Ad...',
      customer: '--',
      media: ['💬', '📞'],
      date: '24-Mar-23 10:09:56 AM',
      disposition: 'Default_D... Default_D...',
      location: 'India Noida',
      supervisor: 'NA'
    },
    {
      process: 'Bank Study',
      user: 'Omkar Ad...',
      customer: '--',
      media: ['💬', '📞'],
      date: '23-Mar-23 05:29:25 PM',
      disposition: 'Default_D... Default_D...',
      location: 'India Mumbai',
      supervisor: 'NA'
    },
    {
      process: 'Bank Trav...',
      user: 'Omkar Ad...',
      customer: '--',
      media: ['💬'],
      date: '21-Mar-23 04:31:14 PM',
      disposition: 'Default_D... Default_D...',
      location: 'India Mumbai',
      supervisor: 'NA'
    },
    {
      process: 'Bank Busi...',
      user: 'Omkar Ad...',
      customer: '--',
      media: ['💬'],
      date: '21-Mar-23 03:01:21 PM',
      disposition: 'Default_D... Default_D...',
      location: 'India Mumbai',
      supervisor: 'NA'
    }
  ];

  const StatusIndicator = () => (
    <div className="flex items-center gap-2">
      <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
      <span className="text-sm font-medium text-green-600">Ready</span>
    </div>
  );

  const Timer = () => (
    <div className="text-sm font-mono text-muted-foreground">
      00:01:23
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-8">Welcome to the Jodo C3</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          <Button variant="outline" className="h-16 text-lg">
            Quick Tutorial
          </Button>
          <Button variant="outline" className="h-16 text-lg">
            Quick Start
          </Button>
          <Button variant="outline" className="h-16 text-lg">
            FAQ and trouble shooting
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Status Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">User status summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Time</span>
                <div className="h-2 w-2 rounded-full bg-teal-500"></div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Telephony Ext not connected</span>
                  <div className="h-2 bg-gray-200 rounded w-1"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Ready</span>
                  <div className="h-2 bg-teal-500 rounded w-32"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Wrap-up</span>
                  <div className="h-2 bg-teal-500 rounded w-2"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Live Session</span>
                  <div className="h-2 bg-teal-500 rounded w-16"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Make Available</span>
                  <div className="h-2 bg-teal-500 rounded w-40"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Lunch break</span>
                  <div className="h-2 bg-teal-500 rounded w-1"></div>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground mt-4">
                Time (mins)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Handled Interactions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total handled interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-40">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">1</div>
                <div className="text-sm text-muted-foreground">Answered</div>
                <div className="mt-4">
                  <Badge variant="secondary">💬 Media</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderMediaTraffic = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-500">Media Traffic</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="activity-logs" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="activity-logs">Activity Logs</TabsTrigger>
          <TabsTrigger value="missedcall-logs">Missedcall Logs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity-logs" className="space-y-4">
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm">Select Process</span>
              <Button variant="outline" size="sm">
                Automobile <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <span className="text-sm text-muted-foreground">+ 80</span>
            </div>
            
            <div className="flex gap-2 ml-auto">
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="ghost" size="sm">Yesterday</Button>
              <Button variant="ghost" size="sm">Last 7 Days</Button>
              <Button variant="ghost" size="sm">This Month</Button>
              <Button variant="ghost" size="sm">Custom Range</Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr className="text-left">
                    <th className="p-3 text-sm font-medium">Process</th>
                    <th className="p-3 text-sm font-medium">User n...</th>
                    <th className="p-3 text-sm font-medium">Custo...</th>
                    <th className="p-3 text-sm font-medium">Media</th>
                    <th className="p-3 text-sm font-medium">Date a...</th>
                    <th className="p-3 text-sm font-medium">Disposi...</th>
                    <th className="p-3 text-sm font-medium">Locatio...</th>
                    <th className="p-3 text-sm font-medium">Superv...</th>
                  </tr>
                </thead>
                <tbody>
                  {mediaTrafficData.map((row, index) => (
                    <tr key={index} className="border-t hover:bg-muted/25">
                      <td className="p-3 text-sm">{row.process}</td>
                      <td className="p-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">OA</AvatarFallback>
                          </Avatar>
                          {row.user}
                        </div>
                      </td>
                      <td className="p-3 text-sm">{row.customer}</td>
                      <td className="p-3 text-sm">
                        <div className="flex gap-1">
                          {row.media.map((icon, i) => <span key={i}>{icon}</span>)}
                        </div>
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">{row.date}</td>
                      <td className="p-3 text-sm">{row.disposition}</td>
                      <td className="p-3 text-sm">{row.location}</td>
                      <td className="p-3 text-sm">{row.supervisor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Rows Per Page</span>
              <Button variant="outline" size="sm">5 <ChevronDown className="h-4 w-4 ml-1" /></Button>
            </div>
            <div>1-5 of 10</div>
          </div>
        </TabsContent>
        
        <TabsContent value="missedcall-logs">
          <div className="text-center py-8 text-muted-foreground">
            No missed call logs available
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="border-b border-border bg-card shadow-sm">
          <div className="flex h-16 items-center justify-between px-4">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-2">
                <img src={jodoLogo} alt="JODO World" className="h-8 w-auto" />
                <span className="text-xl font-bold text-primary hidden sm:inline">JODO World</span>
              </div>
            </div>

            {/* Center Section */}
            <div className="flex items-center gap-4">
              <StatusIndicator />
              <Timer />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <Wifi className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'media-traffic' && renderMediaTraffic()}
          {activeTab !== 'dashboard' && activeTab !== 'media-traffic' && (
            <div className="text-center py-8 text-muted-foreground">
              {sidebarItems.find(item => item.id === activeTab)?.label} content coming soon...
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card px-4 py-2">
          <p className="text-center text-xs text-muted-foreground">
            2018-2023 © Avhan Technologies Pvt. Ltd.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Toolbar;