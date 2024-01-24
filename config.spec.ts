import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    /* Test against desktop browsers */
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
    ],
});