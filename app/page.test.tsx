/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import Page from './page'

test('Page', () => {
  render(<Page />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'Next.js Starter template' })
  ).toBeDefined()
})
