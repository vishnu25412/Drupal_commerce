<?php
namespace Drupal\mydata\Controller;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Database;
use Drupal\Core\Url;
use Drupal\Core\Link;

/**
 * Class DisplayTableController.
 *
 * @package Drupal\mydata\Controller
 */
class DisplayTableController extends ControllerBase {

  public function getContent() {
    // First we'll tell the user what's going on. This content can be found
    // in the twig template file: templates/description.html.twig.
    // @todo: Set up links to create nodes and point to devel module.
    $build = [
      'description' => [
        '#theme' => 'mydata_description',
        '#description' => 'foo',
        '#attributes' => [],
      ],
    ];
    return $build;
  }

  /**
   * Display.
   *
   * @return string
   *   Return Hello string.
   */
  public function display() {
    /**return [
      '#type' => 'markup',
      '#markup' => $this->t('Implement method: display with parameter(s): $name'),
    ];*/
    //create table header
    $header_table = array(
     'id'=>    t('SrNo'),
     'name' => t('Name'),
     'mobilenumber' => t('MobileNumber'),
     'email'=>t('Email'),
     'age' => t('Age'),
     'gender' => t('Gender'),
     'website' => t('Web site'),
     'view' => t('View'),
     'edit' => t('Edit'),
     'delete' => t('Delete'),
    );

//select records from table
    $query = \Drupal::database()->select('mydata', 'm');
      $query->fields('m', ['id','name','mobilenumber','email','age','gender','website']);
      $results = $query->execute()->fetchAll();
      $rows=array();
    foreach($results as $data){
        $url_view = Url::fromRoute('mydata.show_data', ['id' => $data->id], []);
        $edit   = Url::fromUserInput('/mydata/form/mydata?num='.$data->id);
        $delete = Url::fromUserInput('/mydata/form/delete/'.$data->id);

      //print the data from table
             $rows[] = array(
                'id' =>$data->id,
                'name' => $data->name,
                'mobilenumber' => $data->mobilenumber,
                'email' => $data->email,
                'age' => $data->age,
                'gender' => $data->gender,
                'website' => $data->website,

                Link::fromTextAndUrl('View', $url_view),
                Link::fromTextAndUrl('Edit', $edit),
                Link::fromTextAndUrl('Delete', $delete),
            );
        $add = Url::fromUserInput('/mydata/form/mydata');
        $text = 'Add User';
}
    //display data in site
    $form['table'] = [
            '#type' => 'table',
            '#header' => $header_table,
            '#rows' => $rows,
            '#empty' => t('No users found'),
            '#caption' => Link::fromTextAndUrl($text, $add)->toString(),
        ];
        return $form;
}

}