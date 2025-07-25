import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Settings, BarChart3, Shield, Wrench, Globe, Monitor, RefreshCw, CheckCircle, Workflow } from 'lucide-react';
import jodoLogo from '@/assets/jodoworld-logo.png';

const Modules = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  const modules = [
    {
      id: 'toolbar',
      title: 'Jodo Toolbar',
      description: 'User interface for Jodo',
      icon: <Monitor className="h-12 w-12 text-primary" />,
      color: 'bg-blue-50'
    },
    {
      id: 'reports',
      title: 'Jodo Reports',
      description: 'Scheduled and on demand reports',
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      color: 'bg-orange-50'
    },
    {
      id: 'admin',
      title: 'Jodo Admin',
      description: 'Admin interface to configure Jodo',
      icon: <Shield className="h-12 w-12 text-primary" />,
      color: 'bg-yellow-50'
    },
    {
      id: 'manage',
      title: 'Jodo Manage',
      description: 'Web hooks and templates interface',
      icon: <Settings className="h-12 w-12 text-primary" />,
      color: 'bg-yellow-50'
    },
    {
      id: 'tenant-admin',
      title: 'Tenant Admin',
      description: 'Tenant Management module',
      icon: <User className="h-12 w-12 text-primary" />,
      color: 'bg-blue-50'
    },
    {
      id: 'global-screen',
      title: 'Global Screen',
      description: 'Configure new office setup',
      icon: <Globe className="h-12 w-12 text-primary" />,
      color: 'bg-gray-50'
    },
    {
      id: 'online',
      title: 'Jodo Online',
      description: 'Get realtime insight of your operation',
      icon: <Monitor className="h-12 w-12 text-primary" />,
      color: 'bg-blue-50'
    },
    {
      id: 'maintenance',
      title: 'Jodo Maintenance',
      description: 'Tenant Refresh module',
      icon: <RefreshCw className="h-12 w-12 text-primary" />,
      color: 'bg-yellow-50'
    },
    {
      id: 'quality',
      title: 'Jodo Quality',
      description: 'Filter and retrieve recordings',
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      color: 'bg-green-50'
    },
    {
      id: 'toolbar-widget',
      title: 'ToolbarWidget',
      description: 'Jodo interface in CRM/Business App',
      icon: <Workflow className="h-12 w-12 text-primary" />,
      color: 'bg-blue-50'
    }
  ];

  const handleModuleClick = (moduleId) => {
    if (moduleId === 'toolbar') {
      navigate('/toolbar');
    } else {
      console.log(`Navigating to ${moduleId} module`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={jodoLogo} alt="JODO World" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary">JODO World</span>
          </div>

          {/* Profile and Logout */}
          <div className="flex items-center gap-4">
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

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {modules.map((module) => (
            <Card
              key={module.id}
              className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 border border-border/50"
              onClick={() => handleModuleClick(module.id)}
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className={`mb-4 rounded-full p-4 ${module.color}`}>
                  {module.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Powered by{' '}
            <span className="font-medium text-primary">Avhan Technologies</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Modules;