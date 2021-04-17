import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import logo from '../../assets/img/logo.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={logo} height="120" />}
                subtitle="𝐞𝐚𝐫𝐧 𝐛𝐮𝐩 𝐭𝐨𝐤𝐞𝐧𝐬 𝐛𝐲 𝐛𝐚𝐜𝐤𝐮𝐩 𝐬𝐰𝐚𝐩 𝐥𝐩 𝐭𝐨𝐤𝐞𝐧𝐬.. 𝙚𝙫𝙚𝙧𝙮 𝙬𝙚𝙚𝙠 𝙚𝙖𝙘𝙝 𝙪𝙨𝙚𝙧 𝙬𝙞𝙡𝙡 𝙧𝙚𝙘𝙚𝙞𝙫𝙚 𝙖 1% 𝙙𝙞𝙨𝙘𝙤𝙪𝙣𝙩 𝙤𝙣 𝙥𝙤𝙤𝙡𝙨 𝙖 𝙨𝙥𝙚𝙘𝙞𝙖𝙡 𝙤𝙣𝙚 𝙤𝙣𝙡𝙮 𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚 𝙖𝙩 𝙗𝙖𝙘𝙠𝙪𝙥 "
                title="Select Your Favorite Juices"
              />
              <FarmCards />
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

export default Farms
