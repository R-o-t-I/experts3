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

import {
    Icon28BugOutline
} from '@vkontakte/icons';

class StylePanelBase extends React.Component {
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
            Стиль
        </PanelHeader>
        <Group>
            <Div>
                <Link href="https://vk.com/@sevochika-statya-dlya-experta-stilya" target="_blank">
                    <ContentCard
                        image="https://sun9-71.userapi.com/impg/3V9rpEhUpsxugl_XlSICyf4e7djnQxT4ukdd5A/ojkJhowbLdU.jpg?size=1280x720&quality=96&sign=45a6d3f9d3dbff65b3917ce929979d81&type=album"
                        header={<div>«Сломанная лапка, ожерелье, диадема», — что делать, если ты Эксперт Стиля?</div>}
                        text="Тут Вы узнаете что стоит поднимать, а что нет."
                        maxHeight={150}
                        className="text"
                    />
                </Link>
            </Div>
            {
                (queryGet('vk_platform') === 'mobile_android'
                || queryGet('vk_platform') === 'mobile_iphone'
                || queryGet('vk_platform') === 'mobile_ipad') && (
            <Link href="https://vk.com/discover?id=discover_category_full/43" target="_blank">
            <Banner
                mode="image"
                header="Модерируемый раздел"
                subheader="Тут Вы можете сразу перейти в раздел стиль."
                background={
                <div
                    style={{
                    backgroundColor: '#9cb8a0', 
                    backgroundImage: 'url(https://lh3.googleusercontent.com/proxy/39j0J0tVnHRJ8S0vhEFFyhMNxt6fjsWAL6Goo6INkfdHAgAp7DC7cW2l9lO73tvl3-xYxobJgv1vfdsVibIRhSMPXlQ-ZQmdNQeMH6udydlkanBTK-D_O4yy1wen210P-RAlP9inU0I97UCJjn3ZpqBs6K5Zc4Y)',
                    backgroundPosition: 'right bottom',
                    backgroundSize: 50,
                    backgroundRepeat: 'no-repeat',
                    }}
                />
                }
                actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/43" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
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
                    <Link href="https://vk.me/join/AJQ1d_vtEhbpMd517XkoHstY" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Стиль
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

export default connect(null, mapDispatchToProps)(StylePanelBase);