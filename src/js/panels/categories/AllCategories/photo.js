import React from 'react';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";
import {connect} from 'react-redux';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Link,
    CellButton,
    RichCell,
    Avatar,
    Button,
    Banner,
    Div,
    ContentCard,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../../functions/query_get.jsx';

import { Icon28BugOutline } from '@vkontakte/icons';

class PhotoPanelBase extends React.Component {
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
            Фото
        </PanelHeader>
        <Group>
        <Div>
            <Link href="https://vk.com/@efrektal-gaid-po-fotolente" target="_blank">
                <ContentCard
                    image="https://sun9-60.userapi.com/impg/rAXlFHebOCuclqvMRL7Jdn-_DKh84HW4Rmc6Uw/7cegP5c3DHY.jpg?size=2000x1500&quality=96&sign=6dc483e4752458fe16ffd987e7d1f882&type=album"
                    header="Гайд по фотоленте"
                    text="Быть экспертом тематики фото — большая ответственность и тяжкое бремя, возложенное на плечи каждого из нас. Именно поэтому, объединив усилия и объединившись, я/мы создали гайд, посвящённый нелёгкому труду фотоэкспертов."
                    maxHeight={150}
                    className="text"
                />
            </Link>
        </Div>
        {
            (queryGet('vk_platform') === 'mobile_android'
            || queryGet('vk_platform') === 'mobile_iphone'
            || queryGet('vk_platform') === 'mobile_ipad') && (
        <Link href="https://vk.com/discover?id=discover_category_full/19" target="_blank">
        <Banner
            mode="image"
            header="Модерируемый раздел"
            subheader="Тут Вы можете сразу перейти в раздел фото."
            background={
            <div
                style={{
                backgroundColor: '#9cb8a0', 
                backgroundImage: 'url(https://avatanplus.com/files/resources/original/567eaf9380229151deddd845.png)',
                backgroundPosition: 'right bottom',
                backgroundSize: 70,
                backgroundRepeat: 'no-repeat',
                }}
            />
            }
            actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/19" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
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
                    <Link href="https://vk.me/join/AJQ1dzgdChY/3pP6bMVkwOvm" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Фото
            </RichCell>
            <RichCell
                disabled
                before={<Avatar style={{objectFit: 'cover'}} size={72} src="https://sun9-42.userapi.com/impg/rtMdNt0vA-Vnzduj69Sm2H1sA-5H2_Q7uAmbVQ/TfYhqIDo91Y.jpg?size=2160x2160&quality=96&sign=7c2e084992bd7e3e1fd9cad22e9c837f&type=album" />}
                caption="Неофициальная группа"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.com/efrektal" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                ЭФРЕКТАЛ
            </RichCell>
            <RichCell
                disabled
                before={<Avatar style={{objectFit: 'cover'}} size={72} src="https://sun1.velcom-by-minsk.userapi.com/impf/Ep-Gs6XeG9DwR9Xng2KY7V1gPGvB021csWIEJw/kEJ3k9Q-RSI.jpg?size=270x184&quality=95&crop=2,0,376,256&sign=fd897dc3627997945842336b912a7027" />}
                caption="Неофициальная беседа"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.me/join/AJQ1dw5R7hfduzzBmioax07a" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                ЭФРЕКТАЛЧАТ
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

export default connect(null, mapDispatchToProps)(PhotoPanelBase);