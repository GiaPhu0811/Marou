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
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    buttonType: Attribute.Enumeration<
      ['red', 'blue', 'light', 'outline red', 'outline blue', 'disable']
    > &
      Attribute.DefaultTo<'red'>;
  };
}

export interface UiContent extends Schema.Component {
  collectionName: 'components_ui_contents';
  info: {
    displayName: 'Content';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    image: Attribute.Media;
    button: Attribute.Component<'ui.button'>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
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
      'ui.content': UiContent;
      'ui.slider': UiSlider;
    }
  }
}
