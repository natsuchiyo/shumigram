import ExportedImage from 'next-image-export-optimizer';
import { DescriptionArea, DescriptionSection, DescripSubArea } from '../../_common/components/pieces/Descriptions';
import { getImgPath } from '../../_common/functions/urls/getImgPath';
import { pageName } from '../_values/constants';
import { Box, List, ListItem, UnorderedList } from '@chakra-ui/react';



export function Description() {

    return (
        <DescriptionArea paddingTop={18}>

            <DescriptionSection title='使い方'>
                <DescripSubArea>
                    線を回転させて幾何学模様を作成します。
                    線の長さや回転角度は自由に変更できます。
                    変更後は設定反映ボタンを押すことで新たに模様を書き始めます。
                    線の数は最大5つまで増やすことができます。
                    サンプル模様を描く場合は、選択後に設定反映ボタンを押してください。
                </DescripSubArea>
            </DescriptionSection>

            <DescriptionSection title='設定項目'>
                各設定項目の意味は次の図のようになります。
                <Box aspectRatio={1} position='relative' maxWidth='lg' margin='auto'>
                    <ExportedImage fill src={getImgPath(pageName, 'description.svg')} alt='説明' />
                </Box>
                0.01秒ごとに線を回転角度の値だけ回転させて、軌道線を描いていきます。
                長さは0～999、回転角度は0～180の範囲で設定可能です。
            </DescriptionSection>

            <DescriptionSection title='作成した模様の保存'>
                設定反映ボタンを押すと、URLがその設定に応じたものへと変更されます。
                お気に入りの模様が作成できたらURLをブックマークしておき、そのURLにアクセスすればいつでも同じ模様を呼び出すことができます。
                SNSにそのURLを貼れば共有することもできます。
            </DescriptionSection>

            <DescriptionSection title='模様作成のコツ'>
                <UnorderedList>
                    <ListItem>
                        回転角度が0度に近いと丸々とした図形を描き、180度に近いほどギザギザした図形を描きます。
                    </ListItem>
                    <ListItem>
                        回転角度が360で割り切れる数値だと、毎回同じ軌道を描くためシンプルな模様になります。
                    </ListItem>
                    <ListItem>
                        回転角度に小数点を含ませると毎回違う軌道を描くため、より複雑な模様となります。
                    </ListItem>
                    <ListItem>
                        線の個数が多い場合は模様が乱雑になりやすいので、描画する軌道線を選択することできれいな模様を描くことができます。
                    </ListItem>
                    <ListItem>
                        複数の線で模様を描いて、その線のうち1つだけ逆回転させただけでもまったく違った模様になったりします。
                    </ListItem>
                </UnorderedList>
            </DescriptionSection>

        </DescriptionArea>
    );
};