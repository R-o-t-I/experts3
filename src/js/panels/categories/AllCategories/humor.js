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
    Div,
    ContentCard,
    Banner,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../../functions/query_get.jsx';

import { Icon28BugOutline } from '@vkontakte/icons';

class HumorPanelBase extends React.Component {
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
            Юмор
        </PanelHeader>
        <Group>
            <Div>
                <Link href="https://vk.com/@keksperts-humor-guide" target="_blank">
                    <ContentCard
                        image="https://sun9-69.userapi.com/impf/i93dvVNwfyf0HScUEc6HLVA1h4mQdLdfB44yDQ/n4wuFXGP5i4.jpg?size=1280x718&quality=96&sign=0c6c579f090fcc3dec55db9fce5cb33e&type=album"
                        header="Юмористическое шоу «ВКонтакте.ру»"
                        text="Чтобы Вы не потерялись в бесконечном потоке смешных (и не очень) шуток, мы написали статью, посвященную нелегкому труду экспертов нашей тематики — Юмор."
                        maxHeight={150}
                        className="text"
                    />
                </Link>
            </Div>
            {
                (queryGet('vk_platform') === 'mobile_android'
                || queryGet('vk_platform') === 'mobile_iphone'
                || queryGet('vk_platform') === 'mobile_ipad') && (
            <Link href="https://vk.com/discover?id=discover_category_full/32" target="_blank">
            <Banner
                mode="image"
                header="Модерируемый раздел"
                subheader="Тут Вы можете сразу перейти в раздел юмор."
                background={
                <div
                    style={{
                    backgroundColor: '#9cb8a0', 
                    backgroundImage: 'url(https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/Happy_smiley_face.png?itok=lFjy-IsH)',
                    backgroundPosition: 'right bottom',
                    backgroundSize: 60,
                    backgroundRepeat: 'no-repeat',
                    }}
                />
                }
                actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/32" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
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
                    <Link href="https://vk.me/join/AJQ1d2UFNRbztL2NrVDP/33/" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Юмор
            </RichCell>
            <RichCell
                disabled
                before={<Avatar style={{objectFit: 'cover'}} size={72} src="https://sun2.velcom-by-minsk.userapi.com/impg/qnuv4yZ-6M_YR9qsMmjsGhe9oOZucAN8yEp8yg/sJcbuHq6Xbs.jpg?size=200x0&quality=96&crop=29,29,841,841&sign=cbf8465c7b0d65380bb989a2e1f1c307&ava=1" />}
                caption="Неофициальная беседа"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.me/join/AJQ1d0g9Hhh_mY/eO9YWiVtn" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                кринжологи VK • hype talks
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

export default connect(null, mapDispatchToProps)(HumorPanelBase);