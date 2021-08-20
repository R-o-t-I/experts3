import React from 'react';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";
import {connect} from 'react-redux';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Link,
    CellButton,
    Div,
    RichCell,
    Button,
    Avatar,
    Banner,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../../functions/query_get.jsx';

import {
    Icon28BugOutline,
} from '@vkontakte/icons';

import video from '../../../../img/video.mp4'

class CinemaPanelBase extends React.Component {
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
            Кино
        </PanelHeader>
        <Group>
            <Div className="text">
                Если ты осилил FAQ, знаешь ключевую формулировку для Нолана и смотрел «Драйв», то мы вас поздравляем!
            </Div>
            <video controls="controls" poster="https://avatars.mds.yandex.net/get-ott/239697/2a0000016aea37993add5040a0327fa68c40/1344x756">
                <source src={video} type='video/mp4;' />
                Тег video не поддерживается вашим браузером. 
            </video>
            {
                (queryGet('vk_platform') === 'mobile_android'
                || queryGet('vk_platform') === 'mobile_iphone'
                || queryGet('vk_platform') === 'mobile_ipad') && (
            <Link href="https://vk.com/discover?id=discover_category_full/26" target="_blank">
            <Banner
                mode="image"
                header="Модерируемый раздел"
                subheader="Тут Вы можете сразу перейти в раздел кино."
                background={
                <div
                    style={{
                    backgroundColor: '#9cb8a0', 
                    backgroundImage: 'url(https://www.nvgazeta.ru/upload/resize_cache/iblock/08e/345_9999_0/08e68848eb48368de1b1e0da79dd74d3.png)',
                    backgroundPosition: 'right bottom',
                    backgroundSize: 80,
                    backgroundRepeat: 'no-repeat',
                    }}
                />
                }
                actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/26" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
            />
            </Link>
                )
            }
            <RichCell
                disabled
                before={<Avatar style={{objectFit: 'cover'}} size={72} src="https://sun9-33.userapi.com/impf/c857436/v857436129/de57a/GA7nevF1K_I.jpg?size=1204x1200&quality=96&sign=20323a742f6e77e5c4db3c4bfe0b2d69&type=album" />}
                caption="Официальная беседа"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.me/join/AJQ1d1fmExYQcbY1Ia5AVpJq" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Кино
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

export default connect(null, mapDispatchToProps)(CinemaPanelBase);