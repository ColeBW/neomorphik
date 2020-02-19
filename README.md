# Neomorphik

This package provides a library with Neomorphism Styled Components.


## Install :

`npm i neomorphik`


## Usage :

### Components :  

```javascript
import NeoButton from 'neomorphik';

<NeoButton>Click Here</NeoButton>;
```

### Mixins :  

```javascript
import styled from 'styled-components';
import BackgroundDark from 'neomorphik';

const Container = styled.div`
  ${BackgroundDark}
`;
```


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
      <>
        <NeoButton>Click Here</NeoButton>
      </>
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
      <>
        <NeoButtonInverted>Click Here</NeoButtonInverted>
      </>
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
      <>
        <NeoButtonDark>Click Here</NeoButtonDark>
      </>
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
      <>
        <NeoButtonDarkInverted>Click Here</NeoButtonDarkInverted>
      </>
    );
  }

export default Example;
```


## Available Mixins :

Add these mixins to your parent containers:

`${Background}`  
`${BackgroundDark}`  

```javascript
import styled from 'styled-components';
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
import styled from 'styled-components';
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
