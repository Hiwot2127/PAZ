// Custom hook for Google Analytics tracking
export const useAnalytics = () => {
  const trackEvent = (action, category, label, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  const trackPageView = (page_title, page_location) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-56RFLPP0G9', {
        page_title: page_title,
        page_location: page_location
      });
    }
  };

  const trackContactClick = (method) => {
    trackEvent('contact_click', 'engagement', method);
  };

  const trackButtonClick = (buttonName, page) => {
    trackEvent('button_click', 'engagement', buttonName, page);
  };

  const trackProductView = (productName) => {
    trackEvent('product_view', 'engagement', productName);
  };

  const trackGalleryImageClick = (imageId) => {
    trackEvent('gallery_image_click', 'engagement', `image_${imageId}`);
  };

  const trackScroll = (section) => {
    trackEvent('scroll', 'engagement', section);
  };

  return {
    trackEvent,
    trackPageView,
    trackContactClick,
    trackButtonClick,
    trackProductView,
    trackGalleryImageClick,
    trackScroll
  };
}; 