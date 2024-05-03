import type { Schema, Attribute } from '@strapi/strapi';

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Tittle: Attribute.String & Attribute.Required;
    Url: Attribute.String & Attribute.Required;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_link_menus';
  info: {
    displayName: 'Menu Item';
    icon: 'link';
    description: '';
  };
  attributes: {
    menu_item: Attribute.Component<'links.link'>;
    is_show: Attribute.Boolean & Attribute.DefaultTo<false>;
    submenu: Attribute.Component<'links.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'links.link': LinksLink;
      'menu.menu': MenuMenu;
    }
  }
}
