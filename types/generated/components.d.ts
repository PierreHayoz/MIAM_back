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

export interface BlocksButton extends Struct.ComponentSchema {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    externalURL: Schema.Attribute.String;
    label: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface BlocksCommission extends Struct.ComponentSchema {
  collectionName: 'components_blocks_commissions';
  info: {
    displayName: 'commission';
  };
  attributes: {
    commission_strategiques: Schema.Attribute.Relation<
      'oneToMany',
      'api::commission-strategique.commission-strategique'
    >;
    title: Schema.Attribute.String;
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

export interface BlocksGlossaires extends Struct.ComponentSchema {
  collectionName: 'components_blocks_glossaires';
  info: {
    displayName: 'glossaires';
  };
  attributes: {
    glossaires: Schema.Attribute.Relation<
      'oneToMany',
      'api::glossaire.glossaire'
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHoverList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hover_lists';
  info: {
    displayName: 'HoverList';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['text', 'image', 'text_image']>;
  };
}

export interface BlocksListItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_list_items';
  info: {
    displayName: 'list-item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface BlocksMap extends Struct.ComponentSchema {
  collectionName: 'components_blocks_maps';
  info: {
    displayName: 'map';
  };
  attributes: {
    label: Schema.Attribute.String;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
    zoom: Schema.Attribute.Integer;
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

export interface BlocksMembres extends Struct.ComponentSchema {
  collectionName: 'components_blocks_membres';
  info: {
    displayName: 'membres';
  };
  attributes: {
    membres: Schema.Attribute.Relation<'oneToMany', 'api::membre.membre'>;
    title: Schema.Attribute.String;
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

export interface BlocksNomade extends Struct.ComponentSchema {
  collectionName: 'components_blocks_nomades';
  info: {
    displayName: 'nomade';
  };
  attributes: {
    miam_nomades: Schema.Attribute.Relation<
      'oneToMany',
      'api::miam-nomade.miam-nomade'
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksParagraphes extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphes';
  info: {
    displayName: 'paragraphes';
  };
  attributes: {
    paragraphe: Schema.Attribute.Blocks;
  };
}

export interface BlocksPartnersList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_partners_lists';
  info: {
    displayName: 'partners-list';
  };
  attributes: {
    paragraphe: Schema.Attribute.Blocks;
    partners: Schema.Attribute.Relation<'oneToMany', 'api::partner.partner'>;
  };
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

export interface SharedDateOccurence extends Struct.ComponentSchema {
  collectionName: 'components_shared_date_occurences';
  info: {
    displayName: 'date-occurence';
  };
  attributes: {
    date: Schema.Attribute.Date;
    endTime: Schema.Attribute.Time;
    startTime: Schema.Attribute.Time;
  };
}

export interface SharedEventsSuggestions extends Struct.ComponentSchema {
  collectionName: 'components_shared_events_suggestions';
  info: {
    displayName: 'events-suggestions';
  };
  attributes: {
    excludeCurrent: Schema.Attribute.Boolean;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    title: Schema.Attribute.String;
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

export interface SharedHoverlist extends Struct.ComponentSchema {
  collectionName: 'components_shared_hoverlists';
  info: {
    displayName: 'hoverlist';
  };
  attributes: {};
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    url: Schema.Attribute.String;
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

export interface SharedPriceTier extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_tiers';
  info: {
    description: 'Un palier de prix (ex: Adulte, \u00C9tudiant...)';
    displayName: 'Price tier';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    currency: Schema.Attribute.Enumeration<['CHF', 'EUR', 'USD']> &
      Schema.Attribute.DefaultTo<'CHF'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    note: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<''>;
  };
}

export interface SharedSectionCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_ctas';
  info: {
    displayName: 'sectionCTA';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_left: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    paragraphe: Schema.Attribute.Blocks;
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
      'blocks.button': BlocksButton;
      'blocks.commission': BlocksCommission;
      'blocks.events-list': BlocksEventsList;
      'blocks.gallery-media': BlocksGalleryMedia;
      'blocks.glossaires': BlocksGlossaires;
      'blocks.hover-list': BlocksHoverList;
      'blocks.list-item': BlocksListItem;
      'blocks.map': BlocksMap;
      'blocks.media-item': BlocksMediaItem;
      'blocks.membres': BlocksMembres;
      'blocks.mid-paragraph': BlocksMidParagraph;
      'blocks.nomade': BlocksNomade;
      'blocks.paragraphes': BlocksParagraphes;
      'blocks.partners-list': BlocksPartnersList;
      'hover-style.ui': HoverStyleUi;
      'shared.button': SharedButton;
      'shared.contact': SharedContact;
      'shared.date-occurence': SharedDateOccurence;
      'shared.events-suggestions': SharedEventsSuggestions;
      'shared.gallery-item': SharedGalleryItem;
      'shared.hoverlist': SharedHoverlist;
      'shared.link': SharedLink;
      'shared.partners': SharedPartners;
      'shared.partners-list': SharedPartnersList;
      'shared.price_tier': SharedPriceTier;
      'shared.section-cta': SharedSectionCta;
      'shared.social-link': SharedSocialLink;
    }
  }
}
