import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SSOButtons } from "@/components/SSOButtons";
import { CaptchaBox } from "@/components/CaptchaBox";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
import '../i18n/config';

const Index = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      // Language is handled by the LanguageSelector component
    }
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      toast({
        title: t('pleaseCompleteCaptcha'),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Welcome back!",
        description: "Demo: Login successful with email authentication",
      });
    } catch (error) {
      toast({
        title: t('error'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCaptchaVerify = (token: string | null) => {
    setCaptchaToken(token);
  };

  return (
    <div className="min-h-screen bg-gradient-sso relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-button-sso">
            <LogIn className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="text-xl font-bold text-foreground">
            Social<span className="text-primary">Guard</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <Card className="w-full max-w-md bg-gradient-card backdrop-blur-lg border-border/20 shadow-card-sso">
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <LogIn className="w-8 h-8 text-accent" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                {t('signInTitle')}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('signInSubtitle')}
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Email Login Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="email"
                    placeholder={t('email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-input border-border/50 focus:border-primary/50 transition-smooth"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-input border-border/50 focus:border-primary/50 transition-smooth"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-primary hover:text-accent transition-smooth"
                >
                  {t('forgotPassword')}
                </button>
              </div>

              <CaptchaBox onVerify={handleCaptchaVerify} />

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-accent text-primary-foreground shadow-button-sso hover:shadow-button-sso hover:scale-105 transition-smooth"
                disabled={isLoading || !captchaToken}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>{t('loading')}</span>
                  </div>
                ) : (
                  t('getStarted')
                )}
              </Button>
            </form>

            {/* SSO Options */}
            <SSOButtons />
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center p-6">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <span>© 2024 {t('poweredBy')}</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth">
            SocialGuard Technologies
          </Badge>
        </div>
      </footer>
    </div>
  );
};

export default Index;
