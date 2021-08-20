import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    Text,
    Group,
    Link,
    Tappable,
    Div
} from "@vkontakte/vkui";

import queryGet from '../../../functions/query_get.jsx';

import {
    Icon28BasketballBallOutline,
    Icon28BrainOutline,
    Icon28CameraOutline,
    Icon28ComputerOutline,
    Icon28GameOutline,
    Icon28GiftOutline,
    Icon28HistoryBackwardOutline,
    Icon28MasksOutline,
    Icon28MusicOutline,
    Icon28PaletteOutline,
    Icon28PlaneOutline,
    Icon28SkirtOutline,
    Icon28StoryOutline,
    Icon28VideocamOutline
} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

class CategoriesPanelBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {id, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader noShadow={true}>Категории</PanelHeader>
                <Group>
                {
                    (queryGet('vk_platform') === 'desktop_web') && (
                    <div>
                    <Div className="block-categories">
                        <Tappable className="tappable" onClick={() => setPage('categories', 'it')}>
                            <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28ComputerOutline style={{color: "#66CDAA"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    IT
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'art')}>
                            <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28PaletteOutline style={{color: "#FFCA86"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Арт
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'games')}>
                        <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28GameOutline style={{color: "#4BB34B"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Игры
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'cinema')}>
                        <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28VideocamOutline style={{color: "#792EC0"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Кино
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'music')}>
                            <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28MusicOutline style={{color: "#3F8AE0"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Музыка
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'science')}>
                            <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28BrainOutline style={{color: "#EE9374"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Наука
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'sport')}>
                            <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28BasketballBallOutline style={{color: "#CE5D28"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Спорт
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'style')}>
                            <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28SkirtOutline style={{color: "#735CE6"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Стиль
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'tourism')}>
                            <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28PlaneOutline style={{color: "#62639B"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Туризм
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'photo')}>
                                <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28CameraOutline style={{color: "#E9967A"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Фото
                                </Text>
                            </div>
                        </Tappable>

                        <Tappable className="tappable" onClick={() => setPage('categories', 'humor')}>
                            <div className="block-categorie-pc">
                                <div className="icon-categories"><Icon28MasksOutline style={{color: "#FFA000"}} width={60} height={60} alt=""/></div>
                                <Text weight="regular" className="text-categories">
                                    Юмор
                                </Text>
                            </div>
                        </Tappable>
                        <Link href="https://vk.com/app7789347" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie-pc">
                                    <div className="icon-categories"><Icon28HistoryBackwardOutline style={{color: "#66CDAA"}} width={60} height={60} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Старая версия
                                    </Text>
                                </div>
                            </Tappable>
                        </Link>
                    </Div>

                        {/*<Div className="tematic-block">
                            <img className="img-tematic-block" src="https://vk.com/images/gift/1136/256.png" />
                            <div className="text-tematic-block">
                                ВКонтакте и «Агуша» запустили благотворительный подарок #ЗаПравоНаСчастье для помощи детям с аутизмом.
                            </div>
                        </Div>
                        <Separator />
                        <Link href="https://vk.com/gifts?act=send&ref=gifts&section=trending&gift=1136" target="_blank"><CellButton onClick={this.story} centered before={<Icon28GiftOutline />}>Отправить подарок</CellButton></Link>*/}

                    </div>
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
                            <Tappable className="tappable" onClick={() => setPage('categories', 'it')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28ComputerOutline style={{color: "#66CDAA"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        IT
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'art')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28PaletteOutline style={{color: "#FFCA86"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Арт
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'games')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28GameOutline style={{color: "#4BB34B"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Игры
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'cinema')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28VideocamOutline style={{color: "#792EC0"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Кино
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'music')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28MusicOutline style={{color: "#3F8AE0"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Музыка
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'science')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28BrainOutline style={{color: "#EE9374"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Наука
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'sport')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28BasketballBallOutline style={{color: "#CE5D28"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Спорт
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'style')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28SkirtOutline style={{color: "#735CE6"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Стиль
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'tourism')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28PlaneOutline style={{color: "#62639B"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Туризм
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'photo')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28CameraOutline style={{color: "#E9967A"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Фото
                                    </Text>
                                </div>
                            </Tappable>
            
                            <Tappable className="tappable" onClick={() => setPage('categories', 'humor')}>
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28MasksOutline style={{color: "#FFA000"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Юмор
                                    </Text>
                                </div>
                            </Tappable>
                            <Link href="https://vk.com/app7789347" target="_blank">
                            <Tappable className="tappable">
                                <div className="block-categorie">
                                    <div className="icon-categories"><Icon28HistoryBackwardOutline style={{color: "#F19CBB"}} width={40} height={40} alt=""/></div>
                                    <Text weight="regular" className="text-categories">
                                        Старая версия
                                    </Text>
                                </div>
                            </Tappable>
                            </Link>
                        </Div>
                        
                            {/*<Div className="tematic-block">
                                <img className="img-tematic-block" src="https://vk.com/images/gift/1136/256.png" />
                                <div className="text-tematic-block">
                                    ВКонтакте и «Агуша» запустили благотворительный подарок #ЗаПравоНаСчастье для помощи детям с аутизмом.
                                </div>
                            </Div>
                            <Separator />
                            <Link href="https://vk.com/gifts?act=send&ref=gifts&section=trending&gift=1136" target="_blank"><CellButton onClick={this.story} centered before={<Icon28GiftOutline />}>Отправить подарок</CellButton></Link>*/}
                        </div>
                    )
                }
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    openPopout,
    closePopout
};

export default connect(null, mapDispatchToProps)(CategoriesPanelBase);
