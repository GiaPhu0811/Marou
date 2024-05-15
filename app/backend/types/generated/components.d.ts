import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'globe';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.String & Attribute.Required;
    ogImage: Attribute.Media;
    metaRobots: Attribute.Enumeration<
      [
        'index, follow',
        'noindex, follow',
        'index, nofollow',
        'noindex, nofollow'
      ]
    > &
      Attribute.DefaultTo<'index, follow'>;
    canonicalUrl: Attribute.String;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    buttonType: Attribute.Enumeration<
      ['red', 'blue', 'outline red', 'outline blue', 'disable']
    > &
      Attribute.DefaultTo<'red'>;
  };
}

export interface UiSlider extends Schema.Component {
  collectionName: 'components_ui_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    slideImage: Attribute.Media & Attribute.Required;
    slideTitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo': SeoSeo;
      'ui.button': UiButton;
      'ui.slider': UiSlider;
    }
  }
}
