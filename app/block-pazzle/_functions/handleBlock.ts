import { BlockPazzleState, Cood3DType } from "../values/_type";
import { blockSize } from "../values/_values";





export const rotateBlock = (direction: string, immer: BlockPazzleState) => {

    const [xPos, yPos, zPos] = immer.block.position;

    const tmpBlockShape = createBlockShape(blockSize);
    const tmpBlockCoords: Cood3DType[] = [];
    const tmpBlockThreeCoords: Cood3DType[] = [];

    for (let y = 0; y < blockSize; y++) {
        for (let x = 0; x < blockSize; x++) {
            for (let z = 0; z < blockSize; z++) {
                switch (direction) {
                    case 'U':
                        //ブロックを回転してＢＯＸが存在している場合
                        if (immer.block.shape[y][x][z]) {
                            tmpBlockShape[z][x][Math.abs(y - 2)] = immer.block.shape[y][x][z];
                            const newX = x + xPos;
                            const newY = z + yPos;
                            const newZ = Math.abs(y - 2) + zPos;
                            //ステージ外または衝突した場合はそのままimmerを返す
                            if (newX < 0 || newX > immer.stageSize - 1 || newZ < 0 || newZ > immer.stageSize - 1
                                || immer.stage.shape[newY][newX][newZ]) return immer;
                            tmpBlockCoords.push([newX, newY, newZ]);
                            tmpBlockThreeCoords.push([x, z, Math.abs(y - 2)]);
                        }
                        break;

                    case 'D':
                        if (immer.block.shape[y][x][z]) {
                            tmpBlockShape[Math.abs(z - 2)][x][y] = immer.block.shape[y][x][z];
                            const newX = x + xPos;
                            const newY = Math.abs(z - 2) + yPos;
                            const newZ = y + zPos;
                            if (newX < 0 || newX > immer.stageSize - 1 || newZ < 0 || newZ > immer.stageSize - 1
                                || immer.stage.shape[newY][newX][newZ]) return immer;
                            tmpBlockCoords.push([newX, newY, newZ]);
                            tmpBlockThreeCoords.push([x, Math.abs(z - 2), y]);
                        }
                        break;

                    case 'L':
                        if (immer.block.shape[y][x][z]) {
                            tmpBlockShape[y][Math.abs(z - 2)][x] = immer.block.shape[y][x][z];
                            const newX = Math.abs(z - 2) + xPos;
                            const newY = y + yPos;
                            const newZ = x + zPos;
                            if (newX < 0 || newX > immer.stageSize - 1 || newZ < 0 || newZ > immer.stageSize - 1
                                || immer.stage.shape[newY][newX][newZ]) return immer;
                            tmpBlockCoords.push([newX, newY, newZ]);
                            tmpBlockThreeCoords.push([Math.abs(z - 2), y, x]);
                        }
                        break;

                    case 'R':
                        if (immer.block.shape[y][x][z]) {
                            tmpBlockShape[y][z][Math.abs(x - 2)] = immer.block.shape[y][x][z];
                            const newX = z + xPos;
                            const newY = y + yPos;
                            const newZ = Math.abs(x - 2) + zPos;
                            if (newX < 0 || newX > immer.stageSize - 1 || newZ < 0 || newZ > immer.stageSize - 1
                                || immer.stage.shape[newY][newX][newZ]) return immer;
                            tmpBlockCoords.push([newX, newY, newZ]);
                            tmpBlockThreeCoords.push([z, y, Math.abs(x - 2)]);
                        }
                        break;
                }
            }
        }
    }

    immer.block.shape = tmpBlockShape;
    immer.block.coords = tmpBlockCoords;
    immer.block.threeCoords = tmpBlockThreeCoords;
};




export const moveBlock = (direction: string, immer: BlockPazzleState) => {

    // const immerCopy = current(immer)
    const tmpBlockCoords: Cood3DType[] = JSON.parse(JSON.stringify(immer.block.coords));

    switch (direction) {
        case 'D':
            for (const tmpblockCoord of tmpBlockCoords) {
                const [x, y, z] = tmpblockCoord;
                //移動後のブロックがステージ外または衝突した場合は何も変更しない
                if (z > immer.stageSize - 2 || immer.stage.shape[y][x][z + 1]) return;
                tmpblockCoord[2]++;
            }
            immer.block.position[2]++;
            break;

        case 'U':
            for (const tmpblockCoord of tmpBlockCoords) {
                const [x, y, z] = tmpblockCoord;
                if (z < 1 || immer.stage.shape[y][x][z - 1]) return;
                tmpblockCoord[2]--;
            }

            immer.block.position[2]--;
            break;

        case 'L':
            for (const tmpblockCoord of tmpBlockCoords) {
                const [x, y, z] = tmpblockCoord;
                if (x < 1 || immer.stage.shape[y][x - 1][z]) return;
                tmpblockCoord[0]--;
            }

            immer.block.position[0]--;
            break;

        case 'R':
            for (const tmpblockCoord of tmpBlockCoords) {
                const [x, y, z] = tmpblockCoord;
                if (x > immer.stageSize - 2 || immer.stage.shape[y][x + 1][z]) return;
                tmpblockCoord[0]++;
            }

            immer.block.position[0]++;
            break;
    }

    immer.block.coords = tmpBlockCoords;
};



const createBlockShape = (blockSize: number) => {
    const tmpBlockShape = Array(blockSize);
    for (let i = 0; i < blockSize; i++) {
        const plane = Array(blockSize);
        for (let j = 0; j < blockSize; j++) {
            plane[j] = Array(blockSize);
        }
        tmpBlockShape[i] = plane;
    }

    return tmpBlockShape;
};
