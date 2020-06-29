import React, { Component } from 'react'

import { withTranslation, WithTranslation } from 'react-i18next'

import {
  StringsContainer,
  DemoString,
  DemoStringsSectionTitle
} from './styledComponents'

interface SampleRouteProps extends WithTranslation {}

class SampleRoute extends Component<SampleRouteProps> {
  render() {
    const { t } = this.props
    return (
      <StringsContainer>
        <DemoStringsSectionTitle>
          {t('todos:useCases.normal')}
        </DemoStringsSectionTitle>
        <DemoString>{t('common:failureScreen.retry')}</DemoString>
        <DemoString>{t('todos:addTodo')}</DemoString>
        <DemoStringsSectionTitle>
          {t('todos:useCases.plural')}
        </DemoStringsSectionTitle>
        <DemoString>{t('todos:todosLeft', { count: 1 })}</DemoString>
        <DemoString>{t('todos:todosLeft', { count: 2 })}</DemoString>
        <DemoStringsSectionTitle>
          {t('todos:useCases.parametrized')}
        </DemoStringsSectionTitle>
        <DemoString>{t('todos:todosLeftParameter', { count: 1 })}</DemoString>
        <DemoString>{t('todos:todosLeftParameter', { count: 2 })}</DemoString>
        <DemoString>
          {t('todos:todoWithParameter', { todoText: 'Learning i18n' })}
        </DemoString>
      </StringsContainer>
    )
  }
}
export default withTranslation('translation', { withRef: true })(SampleRoute)
