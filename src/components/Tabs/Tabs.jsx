import cn from 'classnames';

export const Tabs = ({ activeTabId, onTabSelected, tabs }) => {
  const visibleTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': visibleTab.id === tab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() =>
                  visibleTab.id !== tab.id && onTabSelected(tab.id)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {visibleTab.content}
      </div>
    </div>
  );
};
