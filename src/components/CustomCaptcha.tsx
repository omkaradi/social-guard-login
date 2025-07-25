import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';
import captchaImage from "@/assets/captcha-sample.png";

interface CustomCaptchaProps {
  onVerify: (isValid: boolean) => void;
}

export const CustomCaptcha = ({ onVerify }: CustomCaptchaProps) => {
  const { t } = useTranslation();
  const [captchaValue, setCaptchaValue] = useState('');
  const [currentCaptcha, setCurrentCaptcha] = useState('5A7K2');
  const [error, setError] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCurrentCaptcha(result);
    setCaptchaValue('');
    setError('');
    onVerify(false);
  };

  const handleCaptchaChange = (value: string) => {
    setCaptchaValue(value.toUpperCase());
    setError('');
    
    if (value.toUpperCase() === currentCaptcha) {
      onVerify(true);
    } else {
      onVerify(false);
    }
  };

  const validateCaptcha = () => {
    if (captchaValue !== currentCaptcha) {
      setError(t('invalidCaptcha'));
      onVerify(false);
    } else {
      setError('');
      onVerify(true);
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-32 h-16 bg-muted border border-border rounded-md flex items-center justify-center overflow-hidden">
            <span className="text-xl font-mono font-bold text-foreground select-none tracking-wider transform rotate-1">
              {currentCaptcha}
            </span>
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
          </div>
        </div>
        
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={generateCaptcha}
          className="h-8 w-8 p-0"
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="space-y-2">
        <Input
          type="text"
          placeholder={t('enterCaptcha')}
          value={captchaValue}
          onChange={(e) => handleCaptchaChange(e.target.value)}
          onBlur={validateCaptcha}
          className={`bg-input border-border/50 focus:border-primary/50 transition-smooth ${
            error ? 'border-destructive focus:border-destructive' : ''
          }`}
          maxLength={5}
        />
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    </div>
  );
};