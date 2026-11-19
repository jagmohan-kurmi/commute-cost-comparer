window.APP_CONFIG = {
  "slug": "commute-cost-comparer",
  "title": "Commute Cost Comparer",
  "brand": "commute cost comparer.",
  "category": "Travel & transport",
  "tagline": "Estimate monthly car, transit, and rideshare costs from your inputs.",
  "description": "Estimate monthly car, transit, and rideshare costs from your inputs.",
  "mode": "calculator",
  "kind": "commute",
  "fields": [
    {
      "name": "oneWayKm",
      "label": "One-way distance (km)",
      "required": true,
      "type": "number"
    },
    {
      "name": "workDays",
      "label": "Commute days per month",
      "required": true,
      "type": "number"
    },
    {
      "name": "carKmPerLiter",
      "label": "Car efficiency (km/l)",
      "required": true,
      "type": "number"
    },
    {
      "name": "fuelPrice",
      "label": "Fuel price per liter",
      "required": true,
      "type": "number"
    },
    {
      "name": "transitDailyFare",
      "label": "Transit cost per day",
      "required": true,
      "type": "number"
    },
    {
      "name": "rideshareDailyFare",
      "label": "Rideshare cost per day",
      "required": true,
      "type": "number"
    }
  ],
  "dateField": "",
  "timerField": "",
  "titleField": "oneWayKm",
  "scope": "Estimates exclude parking, tolls, time, and changing fares.",
  "emptyText": "No entries yet. Add one above to get started."
};
