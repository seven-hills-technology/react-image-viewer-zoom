# react-image-viewer-zoom
A scalebale image viewer for React.

[View the online demo](http://codepen.io/mawa_hujihara/full/ZezdeJ/).

## Installation
```
$ npm install --save react-image-viewer-zoom
```


## Usage
```js
import ImageViewer from 'react-image-viewer-zoom'
import 'react-image-viewer-zoom/dist/style.css' 

class MyComponent extends React.Component<any, any> {
	render() {
		 const images: any = [
            { src: 'https://unsplash.it/800/300?image=1', title: 'title', content: 'content' },
            { src: 'https://unsplash.it/300/800?image=2', title: 'title', content: 'content' },
            { src: 'https://unsplash.it/1800/300?image=3', title: 'title', content: 'content' },
            { src: 'https://unsplash.it/800/1800?image=4', title: 'title', content: 'content' }
        ];
                
        return (
			<ImageViewer
            	showPreview={true}
           		showIndex={true}
               	prefixCls="mycomponent"
             	activeIndex={0}
             	images={images}/>
        )
	}
}

```

Implement in a modal
```js
class MyModal extends React.Component<any, any> {
    constructor(props: any) {
        this.state = {
            activeIndex: undefined,
            visible: false
        }
    }
    // init active index when open the modal
    open(activeIndex? number) {
        this.setState({
            activeIndex: activeIndex || 0,
            visible: true
        });
    }

    render() {
        const { activeIndex } = this.state;
        
        return this.state.visible ? (
            <div className='my-modal'>
                <ImageViewer
                    showPreview
                    showIndex
                    activeIndex={activeIndex}
                    images={images}/>
            </div>
        ) : null;
    }
}



```
### API

| Prop | Type | Required | Default | Details |
| ------ |  ---- | ---- | ------ | ------- |
| `images` | array | yes | | The set for the image |
| `showIndex` | boolean | no | true | Show the index of the current image on toolbar |
| `showPreview` | boolean | no | true | Show bottom Indicators image preview |
| `activeIndex` | number | no | 0 | Specify the active image when init the image viewer |
| `prefixCls` | string | no | null | |
| `className` | string | no | null | |

Each image item options props

| Prop | Type | Required | Details |
| ------ |  ---- | ---- | ------ | 
| src | string | Yes | The source of the image | 
| title | string | No | Image title | 
| content | string | No | Image caption | 



### Typescript config
tsconfig.json
```js
{
    "compilerOptions": {
        "allowSyntheticDefaultImports": true
    }
}
```
> Set `allowSyntheticDefaultImports` to prevent `error TS1192: Module 'react' has no default export`.
