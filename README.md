# Neomorphik

This package provides a library with Neomorphism Styled Components.


## Install :

##### `npm install neomorphik`

Install as an NPM module.


## Usage :

##### `import { NeoButton } from 'neomorphik';`

##### `<NeoButton>Click Me</NeoButton>;`


## Available Components :

### Light Theme :

Div - `<NeoDiv />`  
Span - `<NeoSpan />`  
Button - `<NeoButton />`  
Input - `<NeoInput />`  
Select - `<NeoSelect />`  
Text Area - `<NeoTextArea />`  

```javascript
import NeoButton from 'neomorphik';

const Example = () => {
    return (
      <div>
        <NeoButton>Click Here</NeoButton>
      </div>
    );
  }

export default Example;
```

### Light Theme Inverted :

Div - `<NeoDivInverted />`  
Span - `<NeoSpanInverted />`  
Button - `<NeoButtonInverted />`  
Input - `<NeoInputInverted />`  
Select - `<NeoSelectInverted />`  
Text Area - `<NeoTextAreaInverted />`  

```javascript
import NeoButtonInverted from 'neomorphik';

const Example = () => {
    return (
      <div>
        <NeoButtonInverted>Click Here</NeoButtonInverted>
      </div>
    );
  }

export default Example;
```

### Dark Theme :

Div - `<NeoDivDark />`  
Span - `<NeoSpanDark />`  
Button - `<NeoButtonDark />`  
Input - `<NeoInputDark />`  
Select - `<NeoSelectDark />`  
Text Area - `<NeoTextAreaDark />`  

```javascript
import NeoButtonDark from 'neomorphik';

const Example = () => {
    return (
      <div>
        <NeoButtonDark>Click Here</NeoButtonDark>
      </div>
    );
  }

export default Example;
```

### Dark Theme Inverted :

Div - `<NeoDivDarkInverted />`  
Span - `<NeoSpanDarkInverted />`  
Button - `<NeoButtonDarkInverted />`  
Input - `<NeoInputDarkInverted />`  
Select - `<NeoSelectDarkInverted />`  
Text Area - `<NeoTextAreaDarkInverted />`  

```javascript
import NeoButtonDarkInverted from 'neomorphik';

const Example = () => {
    return (
      <div>
        <NeoButtonDarkInverted>Click Here</NeoButtonDarkInverted>
      </div>
    );
  }

export default Example;
```


## Available Mixins :

Add these mixins to your parent containers:

`${Background}`  
`${BackgroundDark}`  

```javascript
import styled from '@emotion/styled';
import Background from 'neomorphik';

const MyContainer = styled.div`
    ${Background};
`;

const Example = () => {
    return (
      <MyContainer>
        Hello World
      </MyContainer>
    );
  }

export default Example;
```

Add these mixins to customize your components:

`${Neo}`  
`${NeoInverted}`  
`${NeoDark}`  
`${NeoDarkInverted}`

```javascript
import styled from '@emotion/styled';
import NeoDark from 'neomorphik';

const MyComponent = styled.div`
    ${NeoDark};
`;

const Example = () => {
    return (
      <MyComponent>
        Hello World
      </MyComponent>
    );
  }

export default Example;
```
