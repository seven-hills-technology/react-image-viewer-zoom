/// <reference types="react" />
import * as React from 'react';
import { Component } from 'react';
export interface Image {
    src: string;
    /** Toolbar Caption => {title} - {content} */
    title?: string;
    content?: string;
}
export interface ImageViewerProps {
    images: any[];
    /** Specify the active image when init the image viewer. [default: 0] */
    activeIndex?: number;
    /** Toolbar - index of the image. [default: true] */
    showIndex?: boolean;
    /** Bottom Indicators image preview. [default: true] */
    showPreview?: boolean;
    prefixCls?: string;
    className?: string;
}
declare class ImageViewer extends Component<ImageViewerProps, any> {
    private container;
    private mounted;
    static defaultProps: {
        prefixCls: string;
        className: string;
        showIndex: boolean;
        showPreview: boolean;
        activeIndex: number;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        className: React.Requireable<any>;
        showIndex: React.Requireable<any>;
        showPreview: React.Requireable<any>;
        activeIndex: React.Requireable<any>;
    };
    constructor(props: ImageViewerProps);
    renderIndicators(list: Image[]): JSX.Element[];
    onPrev(): void;
    onNext(): void;
    itemControl(index: number): void;
    onKeyDown(e: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default ImageViewer;
