import * as React from "react";

interface ListProps {
  readonly onToggle: (isToggled: boolean) => any;
  readonly render: (props: RenderProps) => JSX.Element;
}

interface ListState {
  readonly isToggled: boolean;
}

interface RenderProps {
  readonly isToggled: boolean;
  readonly toggle: () => void | {};
}

class Toggle extends React.Component<ListProps, ListState> {
  static readonly defaultProps = { onToggle: () => null };
  readonly state: ListState = { isToggled: false };
  readonly toggle = () =>
    this.setState(
      ({ isToggled }) => ({ isToggled: !isToggled }),
      () => this.props.onToggle(this.state.isToggled)
    );

  render() {
    return this.props.render({
      isToggled: this.state.isToggled,
      toggle: this.toggle
    });
  }
}

const MyToggle = ({ isToggled, toggle }: RenderProps) => {
  return (
    <button onClick={toggle}>{isToggled ? "Toggled On" : "Toggled Off"}</button>
  );
};

const MyApp = () => {
  const toggleText = (toggleState: boolean) => {
    return `This button is ${toggleState ? "on" : "off"}`;
  };
  return (
    <Toggle
      onToggle={isToggled => {
        console.log("toggle", isToggled);
      }}
      render={({ isToggled, toggle }) => (
        <div>
          {toggleText(isToggled)}
          <MyToggle isToggled={isToggled} toggle={toggle} />
          <ToggleSwitch isToggled={isToggled} onClick={toggle} />
        </div>
      )}
    />
  );
};

export default MyApp;

interface ToggleSwitchProps {
  readonly isToggled: boolean;
  readonly className?: string;
  readonly onClick: any;
}

const ToggleSwitch = ({
  isToggled,
  className,
  ...props
}: ToggleSwitchProps) => {
  return (
    <div className="toggle">
      {/*
      Checkbox content
      <input className="toggle-input" type="checkbox" />
*/}
      Button content
      <button
        className={`${className} toggle-btn ${
          isToggled ? "toggle-btn-on" : "toggle-btn-off"
        }`}
        aria-expanded={isToggled}
        {...props}
      />
      {console.log("props", { ...props })}
    </div>
  );
};
