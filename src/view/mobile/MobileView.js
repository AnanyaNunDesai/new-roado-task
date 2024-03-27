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
import './MobileView.css';

const MobileView = () => {
    const y1 = [190, 260, 220, 180, 200, 150, 270];
    const y2 = [200, 200, 300, 380, 280, 320, 200];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className='mobile-page'>
            <div className='mobile-content'>
                <div className='mobile-menu'>
                    <div className='mobile-side-area'>
                        <ClonifyLogo />
                    </div>
                    <div className='mobile-menu-options'>
                        <div className='mobile-avatar'>
                            <div className='mobile-avatar-portrait'>
                                <img src={Avatar} alt='Avatar' />
                            </div>
                            <div className='mobile-avatar-indicator' />
                        </div>
                    </div>
                </div>
                <div className='mobile-search-field'>
                    <SearchIcon />
                    <input
                        placeholder='Search...'
                    />
                </div>
                <div className='mobile-banner'>
                    <div className='mobile-banner-text'>
                        <p className='mobile-banner-heading'>Unlock premium stats</p>
                        <p className='mobile-banner-detail'>Get up to 10TB of storage for a limited time</p>
                    </div>
                    <div className='mobile-upgrade-button'>
                        <BoltIcon />
                        <p className='mobile-upgrade-text'>Upgrade</p>
                    </div>
                </div>
                <div className='mobile-metrics'>
                    <div className='mobile-metrics-card'>
                        <div className='mobile-metrics-header'>
                            <p className='mobile-metrics-title'>Revenue</p>
                            <p className='mobile-metrics-value'>$56,945</p>
                        </div>
                        <div className='mobile-metrics-footer'>
                            <div className='mobile-stat-badge positive'>+45%</div>
                            <p className='mobile-from-stat'>From 4.6%</p>
                        </div>
                    </div>
                    <div className='mobile-metrics-card'>
                        <div className='mobile-metrics-header'>
                            <p className='mobile-metrics-title'>Users</p>
                            <p className='mobile-metrics-value'>76.8%</p>
                        </div>
                        <div className='mobile-metrics-footer'>
                            <div className='mobile-stat-badge negative'>-1.7%</div>
                            <p className='mobile-from-stat'>From 4.6%</p>
                        </div>
                    </div>
                    <div className='mobile-metrics-card'>
                        <div className='mobile-metrics-header'>
                            <p className='mobile-metrics-title'>New Signups</p>
                            <p className='mobile-metrics-value'>116</p>
                        </div>
                        <div className='mobile-metrics-footer'>
                            <div className='mobile-stat-badge neutral'>0.00</div>
                        </div>
                    </div>
                    <div className='mobile-metrics-card'>
                        <div className='mobile-metrics-header'>
                            <p className='mobile-metrics-title'>Retention</p>
                            <p className='mobile-metrics-value'>12.67%</p>
                        </div>
                        <div className='mobile-metrics-footer'>
                            <div className='mobile-stat-badge positive'>+0.6%</div>
                            <p className='mobile-from-stat'>From 4.6%</p>
                        </div>
                    </div>
                </div>
                <div className='mobile-perf-chart'>
                    <div className='mobile-content-header'>
                        <p className='mobile-content-title'>Performance</p>
                        <VerticalDotsIcon />
                    </div>
                    <div className='mobile-content-body'>
                        <LineChart
                            xAxis={[{ scaleType: 'band', data: days }]}
                            series={[
                                {
                                    data: y1,
                                },
                                {
                                    data: y2
                                }
                            ]}
                            height={350}
                        />
                    </div>
                </div>
                <div className='mobile-applist'>
                    <div className='mobile-content-header'>
                        <p className='mobile-content-title'>Installed apps</p>
                        <VerticalDotsIcon />
                    </div>
                    <div className='mobile-applist-container'>
                        <div className='mobile-content-body'>
                            <div className='mobile-applist-row applist-keys'>
                                <p>Source</p>
                                <p>Amount</p>
                                <p>Status</p>
                                <p>User ID</p>
                                <p>Joined</p>
                                <p>Group</p>
                            </div>
                            <div className='mobile-applist-row'>
                                <div className='mobile-source-row'>
                                    <div className='mobile-app-box'>
                                        <ZepplinIcon />
                                    </div>
                                    <p className='mobile-app-name'>Zepplin</p>
                                </div>
                                <p>686.00</p>
                                <div className='mobile-stat-badge-positive'>Active</div>
                                <p>114423</p>
                                <p>October</p>
                                <p>Design</p>
                            </div>
                            <div className='mobile-applist-row'>
                                <div className='mobile-source-row'>
                                    <div className='mobile-app-box'>
                                        <FigmaIcon />
                                    </div>
                                    <p className='mobile-app-name'>Figma</p>
                                </div>
                                <p>864.00</p>
                                <div className='mobile-stat-badge-pending'>Pending</div>
                                <p>76223</p>
                                <p>June</p>
                                <p>Finance</p>
                            </div>
                            <div className='mobile-applist-row'>
                                <div className='mobile-source-row'>
                                    <div className='mobile-app-box'>
                                        <MetaIcon />
                                    </div>
                                    <p className='mobile-app-name'>Meta</p>
                                </div>
                                <p>176.00</p>
                                <div className='mobile-stat-badge-negative'>Cancelled</div>
                                <p>89453</p>
                                <p>March</p>
                                <p>Coding</p>
                            </div>
                            <div className='mobile-applist-row'>
                                <div className='mobile-source-row'>
                                    <div className='mobile-app-box'>
                                        <AngularIcon />
                                    </div>
                                    <p className='mobile-app-name'>Angular</p>
                                </div>
                                <p>49.00</p>
                                <div className='mobile-stat-badge-positive'>Active</div>
                                <p>11467</p>
                                <p>February</p>
                                <p>Marketing</p>
                            </div>
                            <div className='mobile-applist-row'>
                                <div className='mobile-source-row'>
                                    <div className='mobile-app-box'>
                                        <VueIcon />
                                    </div>
                                    <p className='mobile-app-name'>Vue</p>
                                </div>
                                <p>999.00</p>
                                <div className='mobile-stat-badge-positive'>Active</div>
                                <p>67385</p>
                                <p>October</p>
                                <p>Finance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileView;