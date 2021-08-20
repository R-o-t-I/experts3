import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
    Panel,
    PanelHeader,
    Div,
    Tappable,
    Text,
    Link,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../functions/query_get.jsx';

import {
    Icon24CupOutline,
    Icon28BookOutline,
    Icon28CoinsOutline,
    Icon28DonateOutline,
    Icon28FireOutline,
    Icon28HistoryBackwardOutline,
    Icon28MarketOutline,
    Icon28MoneyCircleOutline,
    Icon28SmileOutline,
    Icon28UserSquareOutline
} from '@vkontakte/icons';

class GeneralPanelBase extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Справочник эксперта</PanelHeader>
                {
                    (queryGet('vk_platform') === 'desktop_web') && (
                        <Group>
                        <Div className="block-categories">
                            <Link onClick={() => setPage('general', 'achievments')}>
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28DonateOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Достижения
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link onClick={() => setPage('general', 'stikers')}>
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28SmileOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Стикеры
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/market-182611749" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28MarketOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Магазин
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/@vkexperts-kto-takie-eksperty-vkontakte" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28BookOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Официальный FAQ
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link>
                            <Link href="https://vk.com/@vkexperts-shop-and-incentive-points" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28MoneyCircleOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Баллы экспертов
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            </Link>
                            <Link href="https://vk.com/market?act=balance&owner_id=-182611749" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28CoinsOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                         Детализация счёта
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/app6299850_-76477496" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon24CupOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                         Пантеон авторов
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/@authors-prometheus" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28FireOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Что за Прометей?
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/app7171491" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28UserSquareOutline style={{color: "var(--icon-categories)"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                         Карточка эксперта
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                        </Div>
                        </Group>
                    )
                }
                {
                    (queryGet('vk_platform') === 'mobile_android'
                    || queryGet('vk_platform') === 'mobile_iphone'
                    || queryGet('vk_platform') === 'mobile_android_messenger'
                    || queryGet('vk_platform') === 'mobile_iphone_messenger'
                    || queryGet('vk_platform') === 'mobile_web'
                    || queryGet('vk_platform') === 'mobile_ipad') && (
                        <div>
                        <Div className="block-categories">
                            <Link onClick={() => setPage('general', 'achievments')}>
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28DonateOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Достижения
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link onClick={() => setPage('general', 'stikers')}>
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28SmileOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Стикеры
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/market-182611749" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28MarketOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Магазин
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/@vkexperts-kto-takie-eksperty-vkontakte" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28BookOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Официальный FAQ
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/@vkexperts-shop-and-incentive-points" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28MoneyCircleOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Баллы экспертов
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/market?act=balance&owner_id=-182611749" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28CoinsOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                         Детализация счёта
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/app6299850_-76477496" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon24CupOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                         Пантеон авторов
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/@authors-prometheus" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28FireOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Что за Прометей?
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                            <Link href="https://vk.com/app7171491" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28UserSquareOutline style={{color: "var(--icon-categories)"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                         Карточка эксперта
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                        </Div>
                        </div>
                    )
                }
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(GeneralPanelBase);