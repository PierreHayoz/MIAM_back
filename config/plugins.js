module.exports = () => ({
  navigation: {
    enabled: true,
    config: {
      // 👉 Autorise tes types internes linkables dans la nav :
      contentTypes: ['api::page.page'],

      // 👉 Champ(s) utilisé(s) comme libellé dans l’UI (ex: titre de la page)
      contentTypesNameFields: {
        'api::page.page': ['title'],
      },

      // 👉 Champ(s) pour construire le "path" (ex: /mon-slug)
      pathDefaultFields: {
        'api::page.page': ['slug'], // ou ['path'] si tu as un champ "path"
      },

      // Options utiles :
      allowedLevels: 2,   // profondeur des sous-menus
      i18nEnabled: true,  // si tu utilises le plugin i18n
    },
  },
});
