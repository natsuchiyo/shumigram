import { Box, TextProps, Text } from "@chakra-ui/react";
import { MainContents } from "../../_components/layouts/MainContents";
import { Headline } from "../../_components/parts/Headline";
import { ExternalLinking } from "../../_components/parts/Linking";
import { PropsWithChildren } from "react";
import { Title } from "../../_components/parts/Title";


const Paragraph = (props: TextProps) => {
    return <Text paddingX='4' marginTop='2' {...props as any} />;
};


const Section = (props: PropsWithChildren) => {
    return <Box as='section' width='full'{...props} />;
};



export default function Page() {


    return (
        <MainContents paddingX={{ base: 4, sm: 8 }} paddingBottom='8'>

            <Title />

            <Paragraph marginTop='0'>
                いろいろなシミュレーションやミニゲームを公開しています。
            </Paragraph>

            <Section>
                <Headline design="leftborder" size='md' children='リンクについて' />
                <Paragraph>
                    当サイトはリンクフリーです。自由にリンクを貼っていただいて大丈夫です。
                </Paragraph>
            </Section>

            <Section>
                <Headline design="leftborder" size='md' children='JavaScriptについて' />
                <Paragraph>
                    当サイトのシミュレーションではJavaScriptを使用しております。ブラウザの設定でJavaScriptを無効にされている場合、機能が正しく表示されないことがあります。
                </Paragraph>
            </Section>

            {/* <Section>
                <Headline design="leftborder" size='md' children='アクセス解析ツールに関して' />
                <Paragraph>
                    <>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。</>
                    <>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは<ExternalLinking href="https://www.google.com/analytics/terms/jp.html" target="_blank" rel="noopener noreferrer">こちら</ExternalLinking>をご覧ください。</>
                </Paragraph>
            </Section> */}

            <Section>
                <Headline design="leftborder" size='md' children='免責事項' />
                <Paragraph>
                    掲載情報の内容については万全を期しておりますが、その正確性を保証するものではありません。これらの情報によって生じた損害については責任を負いかねますのでご了承ください。
                </Paragraph>
            </Section>

            <Section>
                <Headline design="leftborder" size='md' children='制作サイト' />
                <Paragraph>
                    <ExternalLinking
                        href="https://probabi.com"
                        children='確率・統計学シミュレーションサイト　プロバビ'
                    />
                </Paragraph>
                <Paragraph>
                    <ExternalLinking
                        href="https://manemyu.net"
                        children='投資シミュレーションサイト　マネミュ'
                    />
                </Paragraph>
                <Paragraph>
                    <ExternalLinking
                        href="https://financial-programmer.net/"
                        children='開発ブログ　FINANCIAL PROGRAMMER'
                    />
                </Paragraph>
                <Paragraph>
                    <ExternalLinking
                        href="https://natsuchiyo.com/"
                        children='管理人プロフィールサイト　なつちよ'
                    />
                </Paragraph>
            </Section>

        </MainContents>
    );
};

