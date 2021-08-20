import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import {getActivePanel} from "./js/services/_functions";

import {
  Epic, 
  View, 
  Root, 
  Tabbar, 
  ModalRoot, 
  TabbarItem, 
  ConfigProvider,
  AdaptivityProvider, 
  AppRoot,
  platform,
  VKCOM,
  Cell,
  SplitCol,
  PanelHeader,
  SplitLayout,
  Panel,
  Group
} from "@vkontakte/vkui";

import { 
  Icon28ArmchairOutline, 
  Icon28AllCategoriesOutline,
  Icon28UserSquareOutline
} from '@vkontakte/icons';

import GeneralPanelBase from './js/panels/general/base';
import AchievementsPanelBase from './js/panels/general/achievements';
import StikersPanelBase from './js/panels/general/stikers';

import CategoriesPanelBase from './js/panels/categories/base';
import ItPanelBase from './js/panels/categories/AllCategories/it';
import ArtPanelBase from './js/panels/categories/AllCategories/Art/art';
import AssessmentArtPanelBase from './js/panels/categories/AllCategories/Art/assessmentRulesArt';
import ChatArtPanelBase from './js/panels/categories/AllCategories/Art/chatRulesArt';
import FaqArtPanelBase from './js/panels/categories/AllCategories/Art/faqExpertArt';
import GamesPanelBase from './js/panels/categories/AllCategories/games';
import CinemaPanelBase from './js/panels/categories/AllCategories/cinema';
import HumorPanelBase from './js/panels/categories/AllCategories/humor';
import MusicPanelBase from './js/panels/categories/AllCategories/music';
import PhotoPanelBase from './js/panels/categories/AllCategories/photo';
import SciencePanelBase from './js/panels/categories/AllCategories/science';
import SportPanelBase from './js/panels/categories/AllCategories/sport';
import StylePanelBase from './js/panels/categories/AllCategories/style';
import TourismPanelBase from './js/panels/categories/AllCategories/tourism';

import CardPanelBase from './js/panels/card/base';
import CardPanelInfo from './js/panels/card/info';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      isDesktop: false,
      Platform: platform()
    }

    this.lastAndroidBackAction = 0;
  }

  async componentDidMount() {
    const {goBack} = this.props;

    let parsedUrl = new URL(window.location.href)
    if (parsedUrl.searchParams.get('vk_platform') === 'desktop_web') {
      this.setState({ 
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM
      })
    }

    window.onpopstate = () => {
      let timeNow = +new Date();

      if (timeNow - this.lastAndroidBackAction > 500) {
        this.lastAndroidBackAction = timeNow;

        goBack();
      } else {
        window.history.pushState(null, null);
      }
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {activeView, activeStory, activePanel, scrollPosition} = this.props;

    if (
      prevProps.activeView !== activeView ||
      prevProps.activePanel !== activePanel ||
      prevProps.activeStory !== activeStory
    ) {
      let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

      window.scroll(0, pageScrollPosition);
    }
  }

  render() {
    const {goBack, setStory, closeModal, popouts, activeView, activeStory, activeModals, panelsHistory} = this.props;
    const { isDesktop, hasHeader, Platform } = this.state

    let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
    let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
    let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

    const homeModals = (
      <ModalRoot activeModal={activeModal}>
        
      </ModalRoot>
    );

    return (     
      <ConfigProvider platform={Platform} isWebView={true}>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout
              header={hasHeader && <PanelHeader separator={false} />}
              style={{ justifyContent: "center" }}
            >
              <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? '560px' : '100%'}
                maxWidth={isDesktop ? '560px' : '100%'}
              >   
                <Epic activeStory={activeStory} tabbar={ !isDesktop && 
                  <Tabbar>
                    <TabbarItem
                      onClick={() => setStory('general', 'base')}
                      selected={activeStory === 'general'}
                      text='Общее'
                    >
                      <Icon28ArmchairOutline/>
                    </TabbarItem>
                    <TabbarItem
                      onClick={() => setStory('categories', 'base')}
                      selected={activeStory === 'categories'}
                      text='Категории'
                    >
                      <Icon28AllCategoriesOutline/>
                    </TabbarItem>
                    <TabbarItem
                      onClick={() => setStory('card', 'base')}
                      selected={activeStory === 'card'}
                      text='Карточка'
                    >
                      <Icon28UserSquareOutline/>
                    </TabbarItem>
                  </Tabbar>
                }>

                  <Root id="general" activeView={activeView} popout={popout}>
                    <View
                      id="general"
                      modal={homeModals}
                      activePanel={getActivePanel("general")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <GeneralPanelBase id="base" withoutEpic={false}/>
                      <AchievementsPanelBase id="achievments"/>
                      <StikersPanelBase id="stikers"/>
                    </View>
                  </Root>

                  <Root id="categories" activeView={activeView} popout={popout}>
                    <View
                      id="categories"
                      modal={homeModals}
                      activePanel={getActivePanel("categories")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <CategoriesPanelBase id="base"/>
                      <ItPanelBase id="it"/>
                      <ArtPanelBase id="art"/>
                      <AssessmentArtPanelBase id="assessmentRulesArt"/>
                      <ChatArtPanelBase id="chatRulersArt"/>
                      <FaqArtPanelBase id="faqExpertArt"/>
                      <GamesPanelBase id="games"/>
                      <CinemaPanelBase id="cinema"/>
                      <HumorPanelBase id="humor"/>
                      <MusicPanelBase id="music"/>
                      <PhotoPanelBase id="photo"/>
                      <SciencePanelBase id="science"/>
                      <SportPanelBase id="sport"/>
                      <StylePanelBase id="style"/>
                      <TourismPanelBase id="tourism"/>
                    </View>
                  </Root>

                  <Root id="card" activeView={activeView} popout={popout}>
                    <View
                      id="card"
                      modal={homeModals}
                      activePanel={getActivePanel("card")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <CardPanelBase id="base"/>
                      <CardPanelInfo id="info"/>
                    </View>
                  </Root>
                </Epic>
              </SplitCol>

              {isDesktop && (
                <SplitCol fixed width='280px' maxWidth='280px'>
                  <Panel id='menuDesktop'>
                    {hasHeader && <PanelHeader/>}
                    <Group>
                      <Cell
                        onClick={() => setStory('general', 'base')}
                        disabled={activeStory === 'general'}
                        before={<Icon28ArmchairOutline/>}
                        style={ activeStory === 'general' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Общее
                      </Cell>
                      <Cell
                        onClick={() => setStory('categories', 'callmodal')}
                        disabled={activeStory === 'categories'}
                        before={<Icon28AllCategoriesOutline/>}
                        style={ activeStory === 'categories' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Категории
                      </Cell>
                      <Cell
                        onClick={() => setStory('card', 'base')}
                        disabled={activeStory === 'card'}
                        before={<Icon28UserSquareOutline/>}
                        style={ activeStory === 'card' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Карточка
                      </Cell>
                    </Group>
                  </Panel>
                </SplitCol>
              )}
              
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.router.activeView,
    activeStory: state.router.activeStory,
    panelsHistory: state.router.panelsHistory,
    activeModals: state.router.activeModals,
    popouts: state.router.popouts,
    scrollPosition: state.router.scrollPosition,
  };
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);















































{/*import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import {getActivePanel} from "./js/services/_functions";

import {
  Epic, 
  View, 
  Root, 
  Tabbar, 
  ModalRoot, 
  TabbarItem, 
  ConfigProvider,
  AdaptivityProvider, 
  AppRoot,
  platform,
  VKCOM,
  Cell,
  SplitCol,
  PanelHeader,
  SplitLayout,
  Panel,
  Group
} from "@vkontakte/vkui";

import { 
  Icon28HomeOutline, 
  Icon28Profile 
} from '@vkontakte/icons';

import HomePanelBase from './js/panels/home/base';
import HomePanelPlaceholder from './js/panels/home/placeholder';

import MorePanelBase from './js/panels/more/base';

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      isDesktop: false,
      Platform: platform()
    }

    this.lastAndroidBackAction = 0;
  }

  async componentDidMount() {
    const {goBack} = this.props;

    let parsedUrl = new URL(window.location.href)
    if (parsedUrl.searchParams.get('vk_platform') === 'desktop_web') {
      this.setState({ 
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM
      })
    }

    window.onpopstate = () => {
      let timeNow = +new Date();

      if (timeNow - this.lastAndroidBackAction > 500) {
        this.lastAndroidBackAction = timeNow;

        goBack();
      } else {
        window.history.pushState(null, null);
      }
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {activeView, activeStory, activePanel, scrollPosition} = this.props;

    if (
      prevProps.activeView !== activeView ||
      prevProps.activePanel !== activePanel ||
      prevProps.activeStory !== activeStory
    ) {
      let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

      window.scroll(0, pageScrollPosition);
    }
  }

  render() {
    const {goBack, setStory, closeModal, popouts, activeView, activeStory, activeModals, panelsHistory} = this.props;
    const { isDesktop, hasHeader, Platform } = this.state

    let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
    let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
    let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

    const homeModals = (
      <ModalRoot activeModal={activeModal}>
        <HomeBotsListModal
          id="MODAL_PAGE_BOTS_LIST"
          onClose={() => closeModal()}
        />
        <HomeBotInfoModal
          id="MODAL_PAGE_BOT_INFO"
          onClose={() => closeModal()}
        />
      </ModalRoot>
    );

    return (     
      <ConfigProvider platform={Platform} isWebView={true}>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout
              header={hasHeader && <PanelHeader separator={false} />}
              style={{ justifyContent: "center" }}
            >
              <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? '560px' : '100%'}
                maxWidth={isDesktop ? '560px' : '100%'}
              >   
                <Epic activeStory={activeStory} tabbar={ !isDesktop && 
                <Tabbar>
                  <TabbarItem
                    onClick={() => setStory('home', 'base')}
                    selected={activeStory === 'home'}
                    text='Главная'
                  ><Icon28HomeOutline/></TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('more', 'callmodal')}
                    selected={activeStory === 'more'}
                    text='Профиль'
                  ><Icon28Profile/></TabbarItem>
                </Tabbar>}>
                  <Root id="home" activeView={activeView} popout={popout}>
                    <View
                      id="home"
                      modal={homeModals}
                      activePanel={getActivePanel("home")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <HomePanelBase id="base" withoutEpic={false}/>
                      <HomePanelPlaceholder id="placeholder"/>
                    </View>
                  </Root>
                  <Root id="more" activeView={activeView} popout={popout}>
                    <View
                      id="more"
                      modal={homeModals}
                      activePanel={getActivePanel("more")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <MorePanelBase id="callmodal"/>
                    </View>
                  </Root>
                </Epic>
              </SplitCol>

              {isDesktop && (
                <SplitCol fixed width='280px' maxWidth='280px'>
                  <Panel id='menuDesktop'>
                    {hasHeader && <PanelHeader/>}
                    <Group>
                      <Cell
                        onClick={() => setStory('home', 'base')}
                        disabled={activeStory === 'home'}
                        before={<Icon28HomeOutline/>}
                        style={ activeStory === 'home' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Главная
                      </Cell>
                      <Cell
                        onClick={() => setStory('more', 'callmodal')}
                        disabled={activeStory === 'more'}
                        before={<Icon28Profile/>}
                        style={ activeStory === 'more' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Профиль
                      </Cell>
                    </Group>
                  </Panel>
                </SplitCol>
              )}
              
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.router.activeView,
    activeStory: state.router.activeStory,
    panelsHistory: state.router.panelsHistory,
    activeModals: state.router.activeModals,
    popouts: state.router.popouts,
    scrollPosition: state.router.scrollPosition,
  };
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/}