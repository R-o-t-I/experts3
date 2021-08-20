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
    ContentCard,
    Div,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../../functions/query_get.jsx';

import { Icon28BugOutline } from '@vkontakte/icons';

class SportPanelBase extends React.Component {
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
            Спорт
        </PanelHeader>
        <Group>
            <Div>
                <Link href="https://vk.com/@dyumiin-faqforsport" target="_blank">
                    <ContentCard
                        image=""
                        header="Советы по оцениваю постов"
                        text="Тут вы найдете советы по оцениванию постов."
                        maxHeight={150}
                        className="text"
                    />
                </Link>
            </Div>
            <Div>
                <Link href="https://vk.com/@unforgettabllle-faqforchat" target="_blank">
                    <ContentCard
                        image=""
                        header="Правила беседы"
                        text="У каждой официальной беседы есть свои правила, они нужны для поддержания порядка."
                        maxHeight={150}
                        className="text"
                    />
                </Link>
            </Div>
            {
                (queryGet('vk_platform') === 'mobile_android'
                || queryGet('vk_platform') === 'mobile_iphone'
                || queryGet('vk_platform') === 'mobile_ipad') && (
            <Link href="https://vk.com/discover?id=discover_category_full/23" target="_blank">
            <Banner
                mode="image"
                header="Модерируемый раздел"
                subheader="Тут Вы можете сразу перейти в раздел спорт."
                background={
                <div
                    style={{
                    backgroundColor: '#9cb8a0', 
                    backgroundImage: 'url(https://cdn2.scratch.mit.edu/get_image/gallery/1715160_200x130.png)',
                    backgroundPosition: 'right bottom',
                    backgroundSize: 50,
                    backgroundRepeat: 'no-repeat',
                    }}
                />
                }
                actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/23" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
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
                    <Link href="https://vk.me/join/AJQ1d_cTNBbIacntLjA9voly" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Спорт
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

export default connect(null, mapDispatchToProps)(SportPanelBase);