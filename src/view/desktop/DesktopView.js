import { LineChart } from '@mui/x-charts/LineChart';
import { ReactComponent as ClonifyLogo } from '../../assets/Clonify.svg';
import { ReactComponent as ChevronUp } from '../../assets/ChevronUp.svg';
import { ReactComponent as ChevronDown } from '../../assets/ChevronDown.svg';
import { ReactComponent as AppsIcon } from '../../assets/Apps.svg';
import { ReactComponent as AngularIcon } from '../../assets/Angular.svg';
import { ReactComponent as BoltIcon } from '../../assets/Bolt.svg';
import { ReactComponent as CalendarIcon } from '../../assets/Calendar.svg';
import { ReactComponent as DashboardIcon } from '../../assets/Dashboard.svg';
import { ReactComponent as GlobeIcon } from '../../assets/Globe.svg';
import { ReactComponent as FileManagerIcon } from '../../assets/FileManager.svg';
import { ReactComponent as FigmaIcon } from '../../assets/Figma.svg';
import { ReactComponent as FriendsIcon } from '../../assets/Friends.svg';
import { ReactComponent as HelpCenterIcon } from '../../assets/HelpCenter.svg';
import { ReactComponent as LogoutIcon } from '../../assets/Logout.svg';
import { ReactComponent as MessagesIcon } from '../../assets/Messages.svg';
import { ReactComponent as MetaIcon } from '../../assets/Meta.svg';
import { ReactComponent as NotificationIcon } from '../../assets/Notification.svg';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import { ReactComponent as SettingsIcon } from '../../assets/Settings.svg';
import { ReactComponent as VerticalDotsIcon } from '../../assets/VerticalDots.svg';
import { ReactComponent as VueIcon } from '../../assets/Vue.svg';
import { ReactComponent as ZepplinIcon } from '../../assets/Zepplin.svg';
import Avatar from '../../assets/mikebjordan.png';
import './DesktopView.css';

const DesktopView = () => {
    const y1 = [190, 260, 220, 180, 200, 150, 270];
    const y2 = [200, 200, 300, 380, 280, 320, 200];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className='desktop-page'>
            <div className='sidebar'>
                <div className='side-area'>
                    <ClonifyLogo />
                    <div className='side-navi'>
                        <p className='side-title'>DASHBOARD</p>
                        <div className='section'>
                            <div className='section-header-row selected'>
                                <div className='section-title'>
                                    <DashboardIcon />
                                    <p>Dashboard</p>
                                </div>
                                <div className='arrow-icon'>
                                    <ChevronUp />
                                </div>
                            </div>
                            <div className='subsection'>
                                <p className='selected'>Analytics</p>
                                <p>Finance</p>
                                <p>Job Board</p>
                            </div>
                        </div>
                        <div className='section'>
                            <div className='section-header-row'>
                                <div className='section-title'>
                                    <MessagesIcon />
                                    <p>Messages</p>
                                </div>
                                <ChevronDown />
                            </div>
                        </div>
                        <div className='section'>
                            <div className='section-header-row'>
                                <div className='section-title'>
                                    <FriendsIcon />
                                    <p>Friends</p>
                                </div>
                                <ChevronDown />
                            </div>
                        </div>
                        <div className='section'>
                            <div className='section-header-row'>
                                <div className='section-title'>
                                    <AppsIcon />
                                    <p>Apps</p>
                                </div>
                                <ChevronDown />
                            </div>
                        </div>
                    </div>
                    <div className='side-navi'>
                        <p className='side-title'>PAGES</p>
                        <div className='section'>
                            <div className='section-header-row'>
                                <div className='section-title'>
                                    <HelpCenterIcon />
                                    <p>Help Center</p>
                                </div>
                                <ChevronDown />
                            </div>
                            <div className='section'>
                                <div className='section-header-row'>
                                    <div className='section-title'>
                                        <FileManagerIcon />
                                        <p>File Manager</p>
                                    </div>
                                    <ChevronDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sidebar-footer'>
                    <div className='footer-row'>
                        <SettingsIcon />
                        <LogoutIcon />
                        <GlobeIcon />
                    </div>
                </div>
            </div>
            <div className='desktop-content'>
                <div className='menu'>
                    <div className='search-field'>
                        <SearchIcon />
                        <input
                            placeholder='Search...'
                        />
                    </div>
                    <div className='menu-options'>
                        <div className='notif-badge'>
                            <NotificationIcon />
                            <div className='notif-indicator' />
                        </div>
                        <CalendarIcon />
                        <AppsIcon />
                        <div className='avatar'>
                            <div className='avatar-portrait'>
                                <img src={Avatar} alt='Avatar' />
                            </div>
                            <div className='avatar-indicator' />
                        </div>
                    </div>
                </div>
                <div className='banner'>
                    <div className='banner-text'>
                        <p className='banner-heading'>Unlock premium stats</p>
                        <p className='banner-detail'>Get up to 10TB of storage for a limited time</p>
                    </div>
                    <div className='upgrade-button'>
                        <BoltIcon />
                        <p className='upgrade-text'>Upgrade</p>
                    </div>
                </div>
                <div className='metrics'>
                    <div className='metrics-card'>
                        <div className='metrics-header'>
                            <p className='metrics-title'>Revenue</p>
                            <p className='metrics-value'>$56,945</p>
                        </div>
                        <div className='metrics-footer'>
                            <div className='stat-badge positive'>+45%</div>
                            <p className='from-stat'>From 4.6%</p>
                        </div>
                    </div>
                    <div className='metrics-card'>
                        <div className='metrics-header'>
                            <p className='metrics-title'>Users</p>
                            <p className='metrics-value'>76.8%</p>
                        </div>
                        <div className='metrics-footer'>
                            <div className='stat-badge negative'>-1.7%</div>
                            <p className='from-stat'>From 4.6%</p>
                        </div>
                    </div>
                    <div className='metrics-card'>
                        <div className='metrics-header'>
                            <p className='metrics-title'>New Signups</p>
                            <p className='metrics-value'>116</p>
                        </div>
                        <div className='metrics-footer'>
                            <div className='stat-badge neutral'>0.00</div>
                        </div>
                    </div>
                    <div className='metrics-card'>
                        <div className='metrics-header'>
                            <p className='metrics-title'>Retention</p>
                            <p className='metrics-value'>12.67%</p>
                        </div>
                        <div className='metrics-footer'>
                            <div className='stat-badge positive'>+0.6%</div>
                            <p className='from-stat'>From 4.6%</p>
                        </div>
                    </div>
                </div>
                <div className='perf-chart'>
                    <div className='content-header'>
                        <p className='content-title'>Performance</p>
                        <VerticalDotsIcon />
                    </div>
                    <div className='content-body'>
                        <LineChart
                            xAxis={[{ scaleType: 'band', data: days }]}
                            series={[
                                {
                                    data: y1,
                                    showMark: false,
                                },
                                {
                                    data: y2,
                                    showMark: false,
                                }
                            ]}
                            height={200}
                        />
                    </div>
                </div>
                <div className='applist'>
                    <div className='content-header'>
                        <p className='content-title'>Installed apps</p>
                        <VerticalDotsIcon />
                    </div>
                    <div className='content-body'>
                        <div className='applist-row applist-keys'>
                            <p>Source</p>
                            <p>Amount</p>
                            <p>Status</p>
                            <p>User ID</p>
                            <p>Joined</p>
                            <p>Group</p>
                        </div>
                        <div className='applist-row'>
                            <div className='source-row'>
                                <div className='app-box'>
                                    <ZepplinIcon />
                                </div>
                                <p className='app-name'>Zepplin</p>
                            </div>
                            <p>686.00</p>
                            <div className='stat-badge-positive'>Active</div>
                            <p>114423</p>
                            <p>October</p>
                            <p>Design</p>
                        </div>
                        <div className='applist-row'>
                            <div className='source-row'>
                                <div className='app-box'>
                                    <FigmaIcon />
                                </div>
                                <p className='app-name'>Figma</p>
                            </div>
                            <p>864.00</p>
                            <div className='stat-badge-pending'>Pending</div>
                            <p>76223</p>
                            <p>June</p>
                            <p>Finance</p>
                        </div>
                        <div className='applist-row'>
                            <div className='source-row'>
                                <div className='app-box'>
                                    <MetaIcon />
                                </div>
                                <p className='app-name'>Meta</p>
                            </div>
                            <p>176.00</p>
                            <div className='stat-badge-negative'>Cancelled</div>
                            <p>89453</p>
                            <p>March</p>
                            <p>Coding</p>
                        </div>
                        <div className='applist-row'>
                            <div className='source-row'>
                                <div className='app-box'>
                                    <AngularIcon />
                                </div>
                                <p className='app-name'>Angular</p>
                            </div>
                            <p>49.00</p>
                            <div className='stat-badge-positive'>Active</div>
                            <p>11467</p>
                            <p>February</p>
                            <p>Marketing</p>
                        </div>
                        <div className='applist-row'>
                            <div className='source-row'>
                                <div className='app-box'>
                                    <VueIcon />
                                </div>
                                <p className='app-name'>Vue</p>
                            </div>
                            <p>999.00</p>
                            <div className='stat-badge-positive'>Active</div>
                            <p>67385</p>
                            <p>October</p>
                            <p>Finance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopView;