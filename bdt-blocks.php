<?php
/**
 * Plugin Name:       BDT Blocks
 * Description:       Starter plugin for creating Gutenberg blocks with zero configuration.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            BDThemes
 * Author URI:        https://bdthemes.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bdt-blocks
 *
 * @package           @wordpress/create-block 
 */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @package BDT Blocks 
 * @version 1.0.0
 * Final Class BDT Blocks
 */

final class BDT_BLOCKS_CLASS {
	
	private static $instance;

	/**
	 * Singleton Instance
	 */
	public static function instance(){
		if( is_null( self::$instance ) ){
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Class Constructor
	 */
	public function __construct(){
		$this->define_constants();

		if ( !version_compare( BDT_WP_VERSION, '5.8', '>=' ) ){
            add_action( 'admin_notices', [ $this, 'check_wp_version' ] );
        } elseif ( !version_compare( BDT_PHP_VERSION, '5.6', '>=' ) ){
            add_action( 'admin_notices', [ $this, 'check_php_version' ] );
        } elseif ( !function_exists( 'register_block_type' ) ){
            add_action( 'admin_notices', [ $this, 'gutenberg_unavailable_notice' ] );
        } else {
            $this->includes();
        }
		
        // activation hook
        register_activation_hook( BDT_FILE, [ $this, 'blocks_activation_hook' ] );
        // deactivation hook
        register_deactivation_hook( BDT_FILE, [ $this, 'blocks_deactivation_hook' ] );

	}

	/**
     * Define Constants
     */
    public function define_constants(){
        define('BDT_NAME', 'bdt-blocks');
		define('BDT_SLUG', 'bdt-blocks');
        define('BDT_VERSION', '1.0.0');
        define('BDT_FILE', __FILE__);
		define('BDT_DIR', __DIR__);
        define('BDT_DIR_PATH', plugin_dir_path(__FILE__));
        define('BDT_ADMIN_URL', plugin_dir_url(__FILE__));
        define('BDT_WP_VERSION', (float) get_bloginfo('version'));
        define('BDT_PHP_VERSION', (float) phpversion());
    }

	/**
     * PHP Version Related Admin Notice
     */
    public function check_php_version(){
        $message = sprintf(
            esc_html__( 'BDT Blocks requires minimum PHP version %s where your current PHP version is %2s. Please update your PHP version to enable BDT Blocks features. ', 'bdt-blocks' ),
            '5.6',
            ZOLO_PHP_VERSION
        );
        $html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
        echo wp_kses_post( $html_message );
    }

    /**
     * WordPress Version Related Admin Notice
     */
    public function check_wp_version(){
        $message = sprintf(
            esc_html__( 'BDT Blocks requires minimum WordPress version %s where your current WordPress version is %2s. Please update your WordPress version to enable BDT Blocks features. ', 'bdt-blocks' ),
            '5.8',
            ZOLO_WP_VERSION
        );
        $html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
        echo wp_kses_post( $html_message );
    }

    /**
     * Gutenberg Plugin Activation Related Admin Notice
     */
    public function gutenberg_unavailable_notice(){

        if ( ! current_user_can( 'install_plugins' ) ) {
            return;
        }

        $class = 'notice notice-error';
        /* translators: %s: html tags */
        $message = sprintf(
            __( 'The <%1$s>%2$s</%1$s> plugin requires <%1$s>Gutenberg</%1$s> plugin installed & activated.', 'bdt-blocks' ),
            $tag = 'strong',
            ZOLO_NAME
        );

        $action_url = wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=gutenberg' ), 'install-plugin_gutenberg' );
        $button_label = __( 'Install Gutenberg', 'bdt-blocks' );

        $button = '<p><a href="' . $action_url . '" class="button-primary">' . $button_label . '</a></p><p></p>';

        printf( '<div class="%1$s"><p>%2$s</p>%3$s</div>', esc_attr( $class ), wp_kses_post( $message ), wp_kses_post( $button ) );
    }

	/**
     * Activation Hook
     */
    public function blocks_activation_hook() {
        // flush rewrite rules
        flush_rewrite_rules();
    }

    /**
     * Deactivation Hook
     */
    public function blocks_deactivation_hook() {
        // flush rewrite rules
        flush_rewrite_rules();
    }

	/**
     * Include required files
     */
    public function includes(){
        require_once BDT_DIR_PATH . 'includes/blocks-loader.php';
    }
}

/**
 * Kickoff
*/
function bdt_blocks(){
	return BDT_BLOCKS_CLASS::instance();
}

// start plugin
bdt_blocks();
