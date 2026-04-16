// Example using js-cookie
import Cookies from 'js-cookie';

const onAcceptCookies = () => {
  // Set your custom consent cookie to 'true' for a year (365 days)
  Cookies.set('analytics_consent', 'true', {
    expires: 365,
    sameSite: 'Strict'
  });

  // Add logic here to enable analytics scripts, ad scripts, etc.
  // For example:
  // enableGoogleAnalytics();
  console.log('Analytics cookies enabled');
};

export { onAcceptCookies };