/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import spinnerReadme from 'bpk-component-spinner/README.md';
import SpinnerLayout from 'bpk-component-spinner/SpinnerLayout';
import {
  BpkSpinner,
  BpkLargeSpinner,
  BpkExtraLargeSpinner,
  SPINNER_TYPES,
} from 'bpk-component-spinner';

import WebComponentPage from 'components/ComponentPage';

const components = [
  {
    id: 'small',
    title: 'Small',
    examples: [
      <SpinnerLayout>
        <BpkSpinner type={SPINNER_TYPES.primary} />
        <BpkSpinner type={SPINNER_TYPES.dark} />
        <BpkSpinner type={SPINNER_TYPES.light} />
      </SpinnerLayout>,
    ],
  },
  {
    id: 'large',
    title: 'Large',
    examples: [
      <SpinnerLayout>
        <BpkLargeSpinner type={SPINNER_TYPES.primary} />
        <BpkLargeSpinner type={SPINNER_TYPES.dark} />
        <BpkLargeSpinner type={SPINNER_TYPES.light} />
      </SpinnerLayout>,
    ],
  },
  {
    id: 'extra-large',
    title: 'Extra large',
    examples: [
      <SpinnerLayout>
        <BpkExtraLargeSpinner type={SPINNER_TYPES.primary} />
        <BpkExtraLargeSpinner type={SPINNER_TYPES.dark} />
        <BpkExtraLargeSpinner type={SPINNER_TYPES.light} />
      </SpinnerLayout>,
    ],
  },
];

const SpinnersPage = () => (
  <WebComponentPage
    examples={components}
    readme={spinnerReadme}
    sassdocId="svgs-mixin-bpk-spinner"
    packageName="bpk-component-spinner"
  />
);

export default SpinnersPage;
