import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowLeft } from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForgotPasswordModal = ({ isOpen, onClose }: ForgotPasswordModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError(t('emailRequired'));
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError(t('invalidEmail'));
      return;
    }

    setIsLoading(true);
    setEmailError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t('resetEmailSent'),
        description: t('resetEmailDescription'),
      });
      
      onClose();
      setEmail('');
    } catch (error) {
      toast({
        title: t('error'),
        description: t('resetEmailError'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) {
      setEmailError('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-card backdrop-blur-lg border-border/20">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl font-semibold text-foreground">
            {t('resetPassword')}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t('resetPasswordDescription')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="reset-email" className="text-sm font-medium text-foreground">
              {t('email')}
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="reset-email"
                type="email"
                placeholder={t('enterEmail')}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className={`pl-10 bg-input border-border/50 focus:border-primary/50 transition-smooth ${
                  emailError ? 'border-destructive focus:border-destructive' : ''
                }`}
              />
            </div>
            {emailError && (
              <p className="text-sm text-destructive">{emailError}</p>
            )}
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isLoading}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('back')}
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-accent text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>{t('sending')}</span>
                </div>
              ) : (
                t('sendResetLink')
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};