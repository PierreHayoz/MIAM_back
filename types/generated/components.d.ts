import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksEventsList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_events_lists';
  info: {
    displayName: 'events-list';
  };
  attributes: {
    defaultRange: Schema.Attribute.Enumeration<
      ['all', 'week', 'month', 'year']
    > &
      Schema.Attribute.DefaultTo<'all'>;
    event_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::event-category.event-category'
    >;
    heading: Schema.Attribute.String;
    intro: Schema.Attribute.Blocks;
    onlyUpcoming: Schema.Attribute.Boolean;
    pageSize: Schema.Attribute.Integer;
    showfilter: Schema.Attribute.Boolean;
    sort: Schema.Attribute.Enumeration<['date_asc', 'date_desc']>;
  };
}

export interface BlocksGalleryMedia extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallery_medias';
  info: {
    displayName: 'gallery-media';
  };
  attributes: {
    gallery: Schema.Attribute.Component<'blocks.media-item', true>;
  };
}

export interface BlocksListItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_list_items';
  info: {
    displayName: 'list-item';
  };
  attributes: {
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    role: Schema.Attribute.String;
  };
}

export interface BlocksMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media_items';
  info: {
    displayName: 'media-item';
  };
  attributes: {
    caption: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Schema.Attribute.Enumeration<['image', 'video']>;
  };
}

export interface BlocksMidParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mid_paragraphs';
  info: {
    displayName: 'mid-paragraph';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'dashboard';
  };
  attributes: {
    items: Schema.Attribute.Component<'blocks.list-item', true>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'list']> &
      Schema.Attribute.DefaultTo<'text'>;
    variant: Schema.Attribute.Enumeration<['text', 'avatar', 'image']>;
  };
}

export interface BlocksPartnersList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_partners_lists';
  info: {
    displayName: 'partners-list';
  };
  attributes: {};
}

export interface HoverStyleUi extends Struct.ComponentSchema {
  collectionName: 'components_hover_style_uis';
  info: {
    displayName: 'ui';
  };
  attributes: {
    hoverColor: Schema.Attribute.String;
    hoverTextColor: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    email: Schema.Attribute.String;
    mapUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
  };
}

export interface SharedGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_items';
  info: {
    displayName: 'gallery-item';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Schema.Attribute.Enumeration<['image', 'video', 'external']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image'>;
  };
}

export interface SharedPartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedPartnersList extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners_lists';
  info: {
    displayName: 'partners-list';
  };
  attributes: {
    partners: Schema.Attribute.Component<'shared.partners', true>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    labe: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.banner': BlocksBanner;
      'blocks.events-list': BlocksEventsList;
      'blocks.gallery-media': BlocksGalleryMedia;
      'blocks.list-item': BlocksListItem;
      'blocks.media-item': BlocksMediaItem;
      'blocks.mid-paragraph': BlocksMidParagraph;
      'blocks.paragraph': BlocksParagraph;
      'blocks.partners-list': BlocksPartnersList;
      'hover-style.ui': HoverStyleUi;
      'shared.button': SharedButton;
      'shared.contact': SharedContact;
      'shared.gallery-item': SharedGalleryItem;
      'shared.partners': SharedPartners;
      'shared.partners-list': SharedPartnersList;
      'shared.social-link': SharedSocialLink;
    }
  }
}
