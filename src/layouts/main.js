import { GoldenLayout } from 'golden-layout';

const mainLayout = new GoldenLayout({
    content: [
        {
            type: 'stack',
            content: [
                {
                    type: 'row',
                    content: [
                        {
                            type: 'column',
                            content: [
                                {
                                    type: 'react-component',
                                    component: 'tree-component',
                                    props: {}
                                },
                                {
                                    type: 'react-component',
                                    component: 'info-panel-component'
                                },
                            ]
                        },
                        {
                            type: 'stack',
                            content: [
                                {
                                    type: 'column',
                                    content: [
                                        {
                                            type: 'row',
                                            content: [
                                                {
                                                    type: 'react-component',
                                                    component: 'heatmap-component',
                                                    props: {}
                                                },
                                                {
                                                    type: 'react-component',
                                                    component: 'mds-component',
                                                    props: {}
                                                }
                                                {
                                                    type: 'react-component',
                                                    component: 'relationship-component',
                                                    props: {}
                                                }
                                            ]
                                        },
                                        {
                                            type: 'row',
                                            content: [
                                                {
                                                    type: 'react-component',
                                                    component: 'd3ndro-component',
                                                    props: {}
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

export default mainLayout;