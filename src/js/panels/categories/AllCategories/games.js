import React from 'react';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";
import {connect} from 'react-redux';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    ContentCard,
    Div,
    RichCell,
    Avatar,
    Link,
    Button,
    CellButton,
    Banner,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../../functions/query_get.jsx';

import { Icon28BugOutline } from '@vkontakte/icons';

class GamesPanelBase extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

render () {
    const {
        id,
        goBack
    } = this.props;

return (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={() => goBack()}/>}
        >
            Игры
        </PanelHeader>
        <Group>
            {
			    (queryGet('vk_platform') === 'desktop_web') && (
                <div>
                <Div>
                    <Link href="https://vk.com/@gameexperts-faq-game?anchor=beseda" target="_blank">
                        <ContentCard
                            image="https://sun9-16.userapi.com/impg/rCydtXM4_vQDMtnoyiroJDwLolw86d8b6LX8GQ/djNjud-HNPk.jpg?size=807x81&quality=96&sign=812181eee9cf647da22f1dcb4e33be79&type=album"
                            header="Правила беседы"
                            text="У каждой официальной беседы есть свои правила, они нужны для поддержания порядка."
                            maxHeight={150}
                            className="text"
                        />
                    </Link>
                </Div>
                <Div>
                    <Link href="https://vk.com/@gameexperts-faq-game?anchor=pravila-otsenki-postov" target="_blank">
                        <ContentCard
                            image="https://sun9-22.userapi.com/impg/c855028/v855028107/1bf029/iUEULjyq9rc.jpg?size=807x81&quality=96&sign=f614eae1dc7803d78c2f0ce2c64e5487&type=album"
                            header="Правила оценки постов"
                            text="Тут Вы узнаете что стоит поднимать, а что нет."
                            maxHeight={100}
                            className="text"
                        />
                    </Link>
                </Div>
                <Div>
                    <Link href="https://vk.com/@gameexperts-faq-game?anchor=chastye-voprosy-i-otvety-na-nikh" target="_blank">
                        <ContentCard
                            image="https://sun9-50.userapi.com/impg/c853520/v853520826/1bdb0f/mtxO1g1kDAg.jpg?size=807x81&quality=96&sign=706613509710167af5bcdadbbbc597a1&type=album"
                            header="Часто задаваемые вопросы"
                            text="Многие задают вопросы про рейтинг, достижения и в целом о системе экспертов. Тут Вы найдете многие ответы."
                            maxHeight={100}
                            className="text"
                        />
                    </Link>
                </Div>
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
                    <Div>
                        <Link href="https://vk.com/@gameexperts-faq-game" target="_blank">
                            <ContentCard
                                image="https://sun9-46.userapi.com/impg/c853428/v853428141/1b770e/wX-p_0xMU28.jpg?size=1000x594&quality=96&sign=c46bc3d60a8033387609557d4f73eb95&type=album"
                                header="Эксперты «Игры»: F.A.Q."
                                text="Данная статья не нацелена на повышение вашего рейтинга."
                                maxHeight={150}
                                className="text"
                            />
                        </Link>
                    </Div>
                )
			}
            {
				(queryGet('vk_platform') === 'mobile_android'
				|| queryGet('vk_platform') === 'mobile_iphone'
                || queryGet('vk_platform') === 'mobile_ipad') && (
				<Link href="https://vk.com/discover?id=discover_category_full/12" target="_blank">
				<Banner
					mode="image"
					header="Модерируемый раздел"
					subheader="Тут Вы можете сразу перейти в раздел игры."
					background={
					<div
						style={{
						backgroundColor: '#9cb8a0', 
						backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/12/19/10/54/phone-1917937_960_720.png)',
						backgroundPosition: 'right bottom',
						backgroundSize: 80,
						backgroundRepeat: 'no-repeat',
						}}
					/>
					}
					actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/12" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
				/>
				</Link>
				)
			}
            <RichCell
                disabled
                before={<Avatar size={72} src="https://sun9-33.userapi.com/impf/c857436/v857436129/de57a/GA7nevF1K_I.jpg?size=1204x1200&quality=96&sign=20323a742f6e77e5c4db3c4bfe0b2d69&type=album" />}
                caption="Официальная беседа"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.cc/aaKiHP" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Игры
            </RichCell>
            <RichCell
                disabled
                before={<Avatar size={72} src="https://sun9-49.userapi.com/impg/_NvjyhC6PmA2VMeCpCMAD0zXLSp_858TpD5-0g/GlhSrcFI6W0.jpg?size=1000x1000&quality=96&sign=958b8fce2a321fe370056f7ed01850c8&type=album" />}
                caption="Неофициальное сообщество"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.com/gameexperts" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты: Игры
            </RichCell>
            <Link href="https://vk.me/skreglis" target="_blank">
                <CellButton centered style={{marginBottom: 10, marginTop: 10}} before={<Icon28BugOutline />}>
                    Предложить исправление
                </CellButton>
            </Link>
        </Group>
        </Panel>
        );
    }
}

const mapDispatchToProps = {
    setPage,
    openPopout,
    closePopout,
    goBack
};

export default connect(null, mapDispatchToProps)(GamesPanelBase);