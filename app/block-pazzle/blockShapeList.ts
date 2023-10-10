import { BlockShapeType } from "./_type";

export const initialBlockShapeList: BlockShapeType[] = [
    // 8　U字
    [
        [
            [false, true, false],
            [false, true, false],
            [false, true, false],
        ],
        [
            [false, true, false],
            [false, false, false],
            [false, true, false],
        ],
        [
            [false, true, false],
            [false, false, false],
            [false, true, false],
        ],

    ],
    // 0　十字突起
    [
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],
        [
            [false, true, false],
            [true, true, true],
            [false, true, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ]
    ],
    // 2．長突起
    [
        [
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],

    ],
    // 1　穴あき大
    [
        [
            [true, true, true],
            [true, false, true],
            [true, true, true],
        ],
        [
            [true, true, true],
            [true, false, true],
            [true, true, true],
        ],
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],

    ],
    // 3　長棒
    [
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ]
    ],
    // 4　大L
    [
        [
            [false, false, false],
            [false, true, false],
            [false, true, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],

    ],
    // 5．小L
    [
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, true, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],

    ],
    // 6．平面
    [
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],
        [
            [false, true, true],
            [false, true, true],
            [false, true, true],
        ],
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],

    ],
    // 9　短棒
    [
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],
        [
            [false, true, false],
            [false, true, false],
            [false, false, false],
        ],
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],

    ],
    // 10　角欠け
    [
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],
        [
            [false, false, false],
            [false, true, true],
            [false, true, true],
        ],
        [
            [false, false, false],
            [false, true, true],
            [false, true, false],
        ],

    ],
    // 11　フレミング
    [
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],
        [
            [false, false, false],
            [false, true, true],
            [false, true, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],

    ],
    // 8　c字
    [
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],
        [
            [true, true, false],
            [true, false, false],
            [true, true, false],
        ],
        [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],

    ],
    // 6．角欠け平面
    [
        [
            [false, false, false],
            [false, true, false],
            [false, true, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, true, false],
        ],
        [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],

    ],
];