import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppLayout from '../AppLayout.vue'

describe('AppLayout', () => {
  it('renders properly', () => {
    const wrapper = mount(AppLayout, {
      slots: {
        default: 'Main Content',
      },
    })

    expect(wrapper.text()).toContain('Main Content')
  })
})
