<?php

namespace Drupal\mydata\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Database;
use Drupal\file\Entity\File;
use Drupal\Core\Url;
use Drupal\Core\Link;

/**
 * Class MydataController
 * @package Drupal\mydata\Controller
 */
class MydataController extends ControllerBase
{

  /**
   * @return array
   */
  public function show($id)
  {

    $conn = Database::getConnection();

    $query = $conn->select('mydata', 'm')
      ->condition('id', $id)
      ->fields('m');
    $data = $query->execute()->fetchAssoc();
    $name = $data['name'];
    $mobile = $data['mobilenumber'];
    $email = $data['email'];
    $age = $data['age'];
    $gender = $data['gender'];
    $website = $data['website'];

    $add = Url::fromUserInput('/mydata/hello/table');
    $text = 'Back';

    return [
      '#type' => 'markup',
      '#markup' => "
                    <h4>$name</h4>
                    <p>$mobile</p>
                    <p>$email</p>
                    <p>$age</p>
                    <p>$gender</p>
                    <p>$website</p>",
      '#prefix' => Link::fromTextAndUrl($text, $add)->toString(),
    ];
  }

}