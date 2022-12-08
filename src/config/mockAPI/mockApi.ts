import {axiosMockAdapterInstance} from '@my-bootstrap/bootstrapApi';

const mockSourceGet: {[key: string]: any} = {
  '/currentconditions/v1/topcities/50': require('./json/topcities.json'),
  '/locations/v1/cities/autocomplete': require('./json/cities.json'),
};

for (var key in mockSourceGet) {
  const customData = mockSourceGet[key];
  axiosMockAdapterInstance.onGet(key).reply(() => {
    return [200, customData];
  });
}

axiosMockAdapterInstance
  .onGet(/\/forecasts\/v1\/hourly\/12hour\/\d+/)
  .reply(() => {
    return [200, require('./json/hourly.json')];
  });

axiosMockAdapterInstance
  .onGet(/\/currentconditions\/v1\/\d+\/historical\/24/)
  .reply(() => {
    return [200, require('./json/historical.json')];
  });
