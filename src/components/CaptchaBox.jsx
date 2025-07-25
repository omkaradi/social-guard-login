import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';

export const CaptchaBox = ({ onVerify, theme = 'light' }) => {
  const { t } = useTranslation();

  // Demo site key - in production, use your own site key from Google reCAPTCHA
  const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  return (
    <div className="flex justify-center">
      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={onVerify}
        theme={theme}
        className="recaptcha-container"
      />
    </div>
  );
};