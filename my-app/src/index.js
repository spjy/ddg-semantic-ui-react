import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Dropdown, Menu, Icon, Image, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {    
    return (
      <Menu secondary borderless>
        <Menu.Menu position='right'>
          <Menu.Item
            name='bullhorn'
            onClick={this.handleItemClick}
          >
            <Icon name='bullhorn' />
          </Menu.Item>
          <Dropdown item icon='bars' simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name='dropdown' />
                <span className='text'>New</span>

                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                  <Dropdown.Item>Image</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

class Logo extends React.Component {
  render() {
    return (
      <Image centered size="medium" src="https://cdn.freebiesupply.com/logos/thumbs/2x/duckduckgo-2-logo.png" />
    )
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <Input fluid size='huge' icon='search' />
    )
  }
}

class Advertisement extends React.Component {
  render() {
    return (
      <div className="privacy">
        <Header as="h1">Privacy, simplified.</Header>
        
        <div>
          <Icon name="check" /> We don't store your personal info.
        </div>
    
        <div>
          <Icon name="check" /> We don't follow you around with ads.
        </div>
    
        <div>
          <Icon name="check" /> We don't track you. Ever.
        </div>

        <br />

        <Button primary>Add DuckDuckGo to Chrome</Button>

        <br />
        <br />

        <div>Trusted by <strong>millions</strong> worldwide</div>

        <Image className="privacy-image" centered src="https://duckduckgo.com/assets/home/landing/background.svg" />
      </div>
    )
  }
}

class Information extends React.Component {
  render() {
    return (
      <div className="information">
        <Header inverted as="h1">
          We don’t store your
          <br/>
          personal information. Ever.
        </Header>

        <div>
          Our privacy policy is simple: we don’t collect
          <br/>
          or share any of your personal information.
        </div>

        <br />

        <Button color="teal">Add DuckDuckGo to Chrome</Button>

        <Image centered src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg" />
      </div>
    )
  }
}

class MainSection extends React.Component {
  render() {
    return (
      <Container>
        <TopMenu />
        <Logo />
        <SearchBar />
        <br />
        <br />
        <Advertisement />
      </Container>
    )
  }
}

class PersonalInformationSection extends React.Component {
  render() {
    return (
      <div>
        <Information />
      </div>
    )
  }
}

class DuckDuckGo extends React.Component {
  render() {
    return (
      <div className="grey">
        <MainSection />
        <PersonalInformationSection />
      </div>
    );
  }
}

ReactDOM.render(<DuckDuckGo />, document.getElementById('root'));
