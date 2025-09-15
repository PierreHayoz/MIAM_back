'use strict';

/**
 * miam-nomade service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::miam-nomade.miam-nomade');
